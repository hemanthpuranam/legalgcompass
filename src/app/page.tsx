"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '@/lib/firebase';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const checkAuth = async () => {
      if (app) {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
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
          <p>Explore the information repository and get answers from the AI Legal Assistant.</p>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
