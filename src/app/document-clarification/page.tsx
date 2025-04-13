"use client";

import React, { useState } from 'react';
import { documentClarification } from '@/ai/flows/document-clarification';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FileUploader from "@/components/file-uploader";

const DocumentClarificationPage: React.FC = () => {
  const [documentContent, setDocumentContent] = useState('');
  const [query, setQuery] = useState('');
  const [clarification, setClarification] = useState<string | null>(null);
  const [uploadedFileContent, setUploadedFileContent] = useState<string | null>(null);

  const handleFileUploaded = (content: string) => {
    setUploadedFileContent(content);
    setDocumentContent(content); // Optionally set the document content to the uploaded file content
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const content = uploadedFileContent || documentContent;
    if (!content || !query) {
      alert('Please provide both document content and a query.');
      return;
    }
    const result = await documentClarification({ documentContent: content, query: query });
    setClarification(result?.clarification || 'No clarification available.');
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Document Clarification</CardTitle>
          <CardDescription>Upload legal documents, clarify doubts, and get assistance using AI.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <FileUploader onFileUploaded={handleFileUploaded} />
            </div>
            <div>
              <Textarea
                placeholder="Or enter the content of the legal document"
                value={documentContent}
                onChange={(e) => setDocumentContent(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Input
                placeholder="Enter your query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit">Get Clarification</Button>
          </form>
          {clarification && (
            <div className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Clarification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{clarification}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentClarificationPage;

    