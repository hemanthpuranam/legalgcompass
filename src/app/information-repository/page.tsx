"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InformationRepositoryPage: React.FC = () => {
  const legalTopics = [
    {
      title: "Fundamental Rights",
      description: "Learn about the fundamental rights guaranteed by the Indian Constitution."
    },
    {
      title: "Directive Principles",
      description: "Understand the directive principles of state policy in India."
    },
    {
      title: "Consumer Rights",
      description: "Know your rights as a consumer under Indian law."
    },
    {
      title: "Property Law",
      description: "Explore the basics of property law in India."
    },
    {
      title: "Criminal Law",
      description: "Get an overview of the Indian Penal Code and criminal procedure."
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Information Repository</CardTitle>
          <CardDescription>Explore categorized articles and guides on various legal topics and rights.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {legalTopics.map((topic, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InformationRepositoryPage;
