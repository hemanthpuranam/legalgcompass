// This file implements the Genkit flow for the documentClarification story.
'use server';
/**
 * @fileOverview A document clarification AI agent.
 *
 * - documentClarification - A function that handles the document clarification process.
 * - DocumentClarificationInput - The input type for the documentClarification function.
 * - DocumentClarificationOutput - The return type for the documentClarification function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const DocumentClarificationInputSchema = z.object({
  documentContent: z.string().describe('The content of the legal document.'),
  query: z.string().describe('The specific question or section the user wants clarified.'),
});
export type DocumentClarificationInput = z.infer<typeof DocumentClarificationInputSchema>;

const DocumentClarificationOutputSchema = z.object({
  clarification: z.string().describe('The AI clarification of the document section or term under Indian law.'),
});
export type DocumentClarificationOutput = z.infer<typeof DocumentClarificationOutputSchema>;

export async function documentClarification(input: DocumentClarificationInput): Promise<DocumentClarificationOutput> {
  return documentClarificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'documentClarificationPrompt',
  input: {
    schema: z.object({
      documentContent: z.string().describe('The content of the legal document.'),
      query: z.string().describe('The specific question or section the user wants clarified.'),
    }),
  },
  output: {
    schema: z.object({
      clarification: z.string().describe('The AI clarification of the document section or term under Indian law.'),
    }),
  },
  prompt: `You are an AI legal assistant specializing in clarifying legal documents under Indian law.

  A user has uploaded a legal document and asked a question about it. Use the document content and user's query to provide a clarification. Restrict all responses to Indian legal information.

  Document Content: {{{documentContent}}}
  User Query: {{{query}}}
  Clarification: `,
});

const documentClarificationFlow = ai.defineFlow<
  typeof DocumentClarificationInputSchema,
  typeof DocumentClarificationOutputSchema
>({
  name: 'documentClarificationFlow',
  inputSchema: DocumentClarificationInputSchema,
  outputSchema: DocumentClarificationOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
