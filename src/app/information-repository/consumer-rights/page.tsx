"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ConsumerRightsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Consumer Rights</CardTitle>
          <CardDescription>Know your rights as a consumer under Indian law.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Information on Consumer Rights will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsumerRightsPage;
