"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FundamentalRightsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Fundamental Rights</CardTitle>
          <CardDescription>Learn about the fundamental rights guaranteed by the Indian Constitution.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Information on Fundamental Rights will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundamentalRightsPage;
