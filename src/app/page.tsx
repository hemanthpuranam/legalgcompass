"use client";
import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Legal Compass</CardTitle>
          <CardDescription>Your guide to Indian law and rights.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Explore the information repository and get answers from the AI Legal Assistant.</p>
        </CardContent>
      </Card>
    </div>
  );
}
