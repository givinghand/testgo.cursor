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
      setProfile(null);
      toast({
        title: "Profile Load Error",
        description: "Error loading profile: " + error.message,
        variant: "destructive",
      });
    }
  };

  const signUp = async (email, password, fullName) => {
    setLoading(true);
    try {
      const { data: { user: authUser, session }, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            avatar_url: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fullName)}`,
          }
        }
      });

      if (error) throw error;
      
      if (authUser) {
        await fetchProfile(authUser.id);
      }
      
      return { user: authUser, session };
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      
      if (data.user) {
        await fetchProfile(data.user.id);
      }
      
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setProfile(null);
    } catch (error) {
      throw error;
    }
  };

  const updateProfileAvatar = async (avatarUrl) => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ avatar_url: avatarUrl })
        .eq('id', user.id)
        .select()
        .single();

      if (error) throw error;
      
      if (data) {
        setProfile(prev => ({ ...prev, avatar_url: data.avatar_url }));
        toast({
          title: "Avatar Updated",
          description: "Your profile picture has been updated successfully.",
        });
      }
    } catch (error) {
      toast({
        title: "Avatar Update Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  const checkUserPremiumStatus = () => {
    return profile?.is_premium || false;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      profile, 
      loading, 
      signUp, 
      signIn, 
      signOut, 
      updateProfileAvatar, 
      fetchProfile,
      checkUserPremiumStatus
    }}>
      {children}
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
