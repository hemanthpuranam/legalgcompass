"use client";
import React from 'react';
import Link from "next/link";
import { Icons } from "@/components/icons";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";

const DashboardPage: React.FC = () => {
  const menuItems = [
    {
      href: "/legal-assistant",
      title: "Legal Assistant",
      description: "Get answers to your legal questions.",
      icon: Icons.help,
    },
    {
      href: "/document-clarification",
      title: "Document Clarification",
      description: "Clarify your legal documents.",
      icon: Icons.upload,
    },
    {
      href: "/information-repository",
      title: "Information Repository",
      description: "Explore legal topics and rights.",
      icon: Icons.book,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <Card className="hover:bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.title}</span>
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
