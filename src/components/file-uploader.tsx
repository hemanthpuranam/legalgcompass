"use client";

import React, { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";

interface FileUploaderProps {
  onFileUploaded: (content: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUploaded }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      setFile(null);
      setError(null);
      return;
    }

    const allowedTypes = ['application/pdf', 'text/plain'];
    if (!allowedTypes.includes(selectedFile.type)) {
      setFile(null);
      setError('Invalid file type. Only PDF and text files are allowed.');
      return;
    }

    setFile(selectedFile);
    setError(null);
  };

  const handleUpload = useCallback(() => {
    if (!file) {
      setError('Please select a file.');
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        onFileUploaded(content);
      } catch (e: any) {
        setError('Error reading file.');
        console.error('Error reading file:', e);
      }
    };

    reader.onerror = () => {
      setError('Error reading file.');
    };

    if (file.type === 'application/pdf') {
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          // Strip the data URL prefix
          const base64Content = content.split(',')[1];
          onFileUploaded(atob(base64Content));
        } catch (e: any) {
          setError('Error reading PDF file.');
          console.error('Error reading PDF file:', e);
        }
      };
    } else {
      reader.readAsText(file);
    }
  }, [file, onFileUploaded]);

  return (
    <div>
      <input
        type="file"
        id="upload"
        accept="application/pdf, text/plain"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="upload">
        <Button asChild>
          <span>Select File</span>
        </Button>
      </label>
      {file && (
        <span className="ml-2 text-sm text-gray-500">
          {file.name}
        </span>
      )}
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {file && !error && (
        <Button className="mt-2" type="button" onClick={handleUpload}>
          Upload
        </Button>
      )}
    </div>
  );
};

export default FileUploader;

    