'use client'

import {createContext, ReactNode, useContext, useEffect, useState} from "react";

const API_BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URI;

type Auth = {
  token: string;
  username: string;
  authorities: string[];
};

type AuthContextValue = {
  auth: Auth | null | undefined;
  user: Auth | null | undefined;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<{ token: string, username: string, authorities: string[], } | null>();

  useEffect(() => {
    const saved = sessionStorage.getItem("auth");
    if (saved) setAuth(JSON.parse(saved));
  }, []);

  const signIn = async (username: string, password: string) => {
    const r = await fetch(`${API_BASE_URI}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!r.ok) throw new Error("sign-in failed");
    const data = await r.json();
    const newAuth = { token: data.token, username: data.username, authorities: data.authorities };
    setAuth(newAuth);
    sessionStorage.setItem("auth", JSON.stringify(newAuth));
  };

  const signOut = () => {
    setAuth(null);
    sessionStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ auth, user: auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
