"use client";

import React, { useState } from 'react';
import { legalAssistantQuery } from '@/ai/flows/legal-assistant-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const LegalAssistantPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await legalAssistantQuery({ query: query });
    setAnswer(result?.answer || 'No answer available.');
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>AI Legal Assistant</CardTitle>
          <CardDescription>Ask questions about basic legal concepts and rights.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Textarea
                placeholder="Enter your legal question"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit">Get Answer</Button>
          </form>
          {answer && (
            <div className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Answer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{answer}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LegalAssistantPage;
