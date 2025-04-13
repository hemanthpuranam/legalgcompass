"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CriminalLawPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Criminal Law</CardTitle>
          <CardDescription>Get an overview of the Indian Penal Code and criminal procedure.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Information on Criminal Law will be added here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CriminalLawPage;
