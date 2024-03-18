// hooks/useAuth.ts
import { useState } from 'react';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthResponse | null>(null);

  const signIn = async (email: string, password: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Sign-in failed');
    }

    const data: AuthResponse = await response.json();
    setUser(data);
    // Store token in localStorage or cookies as needed
  };

  const signOut = () => {
    setUser(null);
    // Clear token from storage
  };

  return {
    user,
    signIn,
    signOut,
  };
};
