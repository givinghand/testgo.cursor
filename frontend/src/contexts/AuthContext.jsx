
import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/components/ui/use-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);
    const getSession = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error("Error getting session:", sessionError.message);
        setLoading(false);
        return;
      }

      if (session?.user) {
        setUser(session.user);
        await fetchProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setLoading(true);
      if (session?.user) {
        setUser(session.user);
        await fetchProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId) => {
    if (!userId) {
      setProfile(null);
      return;
    }
    try {
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, avatar_url, is_premium`)
        .eq('id', userId)
        .single();

      if (error && status !== 406) {
        console.error('Error fetching profile:', error.message);
        throw error;
      }
      setProfile(data || null);
    } catch (error) {
      setProfile(null); // Ensure profile is null on error
      toast({
        title: "Profil Yüklenemedi",
        description: "Profil bilgileriniz getirilirken bir sorun oluştu: " + error.message,
        variant: "destructive",
      });
    }
  };

  const signUp = async (email, password, fullName) => {
    setLoading(true);
    const { data: { user: authUser, session }, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          avatar_url: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fullName)}&backgroundColor=00897b,039be5,3949ab,e53935,f4511e,fb8c00&backgroundType=gradientLinear&fontSize=40`,
        }
      }
    });

    if (error) {
      setLoading(false);
      throw error;
    }
    
    if(authUser){
        await fetchProfile(authUser.id);
    } else {
        setProfile(null);
    }
    
    setLoading(false);
    return { user: authUser, session };
  };

  const signIn = async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setLoading(false);
      throw error;
    }
    if (data.user) {
        await fetchProfile(data.user.id);
    } else {
        setProfile(null);
    }
    setLoading(false);
    return data;
  };

  const signOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      setLoading(false);
      throw error;
    }
    setUser(null);
    setProfile(null);
    setLoading(false);
  };

  const updateProfileAvatar = async (avatarUrl) => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ avatar_url: avatarUrl, updated_at: new Date() })
        .eq('id', user.id)
        .select()
        .single();

      if (error) throw error;
      
      if(data) {
        setProfile(prevProfile => ({ ...prevProfile, avatar_url: data.avatar_url }));
        toast({
          title: "Avatar Güncellendi",
          description: "Profil resminiz başarıyla değiştirildi.",
        });
      }
    } catch (error) {
      console.error('Error updating avatar:', error.message);
      toast({
        title: "Avatar Güncellenemedi",
        description: "Profil resmi güncellenirken bir hata oluştu.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const checkUserPremiumStatus = () => {
    return profile?.is_premium || false;
  };


  return (
    <AuthContext.Provider value={{ user, profile, loading, signUp, signIn, signOut, updateProfileAvatar, fetchProfile, checkUserPremiumStatus }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
