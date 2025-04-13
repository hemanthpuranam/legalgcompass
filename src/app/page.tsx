"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '@/lib/firebase';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      if (app) {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsAuthenticated(true);
            setDisplayName(user.displayName); // Set the display name
          } else {
            setIsAuthenticated(false);
            setDisplayName(null);
            router.push('/auth');
          }
          setIsLoading(false); // Set loading to false after auth check
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
      } else {
        console.error("Firebase app not initialized.");
        setIsLoading(false);
        setIsAuthenticated(false);
        router.push('/auth');
        return () => {};
      }
    };

    const unsubscribe = checkAuth();
    return unsubscribe;
  }, [router]);

  const handleSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      router.push('/auth');
    } catch (error: any) {
      console.error("Sign out failed:", error);
    }
  };


  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Loading...</CardTitle>
            <CardDescription>Checking authentication status...</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Please wait while we verify your authentication status.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Or a loading indicator if desired
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Legal Compass</CardTitle>
          <CardDescription>Your guide to Indian law and rights.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Welcome, {displayName || 'User'}! Explore the information repository and get answers from the AI Legal Assistant.</p>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
          <Button variant="destructive" onClick={handleSignOut}>Sign Out</Button>
        </CardContent>
      </Card>
    </div>
  );
}


