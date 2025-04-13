"use client";
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "@/components/icons";

const DashboardPage: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="md:pl-64">
        <Sidebar>
          <SidebarHeader>
            <h4 className="font-semibold text-md">Legal Compass</h4>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link href="/legal-assistant">
                    <SidebarMenuButton>
                      <Icons.help />
                      <span>Legal Assistant</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/document-clarification">
                    <SidebarMenuButton>
                      <Icons.upload />
                      <span>Document Clarification</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/information-repository">
                    <SidebarMenuButton>
                      <Icons.book />
                      <span>Information Repository</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <p className="text-center text-xs">
              Legal Compass © {new Date().getFullYear()}
            </p>
          </SidebarFooter>
        </Sidebar>
        <div className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Welcome to your Legal Compass dashboard.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Use the sidebar to navigate to different features.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
