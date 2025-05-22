import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export function PremiumLock({ children }) {
  const { profile } = useAuth();

  if (profile?.is_premium) {
    return children;
  }

  return (
    <Card className="w-full border-2 border-dashed border-yellow-500/50 bg-yellow-500/5">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
          <Lock className="w-6 h-6 text-yellow-500" />
        </div>
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
          <Crown className="w-5 h-5 text-yellow-500" />
          Premium Feature
        </CardTitle>
        <CardDescription>
          Upgrade to Premium to unlock detailed test analysis and more features
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Get access to:
          </p>
          <ul className="text-sm space-y-1">
            <li>• Detailed test analysis</li>
            <li>• Performance tracking</li>
            <li>• Personalized study plans</li>
            <li>• Advanced statistics</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
          <Link to="/premium">
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Premium
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 