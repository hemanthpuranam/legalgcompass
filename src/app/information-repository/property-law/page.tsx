"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PropertyLawPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Property Law</CardTitle>
          <CardDescription>Explore the basics of property law in India.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Information on Property Law will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyLawPage;
