"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const InformationRepositoryPage: React.FC = () => {
  const legalTopics = [
    {
      title: "Fundamental Rights",
      description: "Learn about the fundamental rights guaranteed by the Indian Constitution.",
      href: "/information-repository/fundamental-rights"
    },
    {
      title: "Directive Principles",
      description: "Understand the directive principles of state policy in India.",
      href: "/information-repository/directive-principles"
    },
    {
      title: "Consumer Rights",
      description: "Know your rights as a consumer under Indian law.",
      href: "/information-repository/consumer-rights"
    },
    {
      title: "Property Law",
      description: "Explore the basics of property law in India.",
      href: "/information-repository/property-law"
    },
    {
      title: "Criminal Law",
      description: "Get an overview of the Indian Penal Code and criminal procedure.",
      href: "/information-repository/criminal-law"
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
              <Link key={index} href={topic.href}>
                <Card className="hover:bg-secondary">
                  <CardHeader>
                    <CardTitle>{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{topic.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InformationRepositoryPage;
