// Legal Assistant Query
'use server';
/**
 * @fileOverview An AI agent that answers user questions about Indian law.
 *
 * - legalAssistantQuery - A function that handles the legal question answering process.
 * - LegalAssistantQueryInput - The input type for the legalAssistantQuery function.
 * - LegalAssistantQueryOutput - The return type for the legalAssistantQuery function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const LegalAssistantQueryInputSchema = z.object({
  query: z.string().describe('The legal question to be answered.'),
});
export type LegalAssistantQueryInput = z.infer<typeof LegalAssistantQueryInputSchema>;

const LegalAssistantQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the legal question.'),
});
export type LegalAssistantQueryOutput = z.infer<typeof LegalAssistantQueryOutputSchema>;

export async function legalAssistantQuery(input: LegalAssistantQueryInput): Promise<LegalAssistantQueryOutput> {
  return legalAssistantQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'legalAssistantQueryPrompt',
  input: {
    schema: z.object({
      query: z.string().describe('The legal question to be answered.'),
    }),
  },
  output: {
    schema: z.object({
      answer: z.string().describe('The answer to the legal question.'),
    }),
  },
  prompt: `You are an AI legal assistant specializing in Indian law. Answer the following question based on your knowledge of Indian law. Provide accurate and relevant information.

Question: {{{query}}}

Answer: `,
});

const legalAssistantQueryFlow = ai.defineFlow<
  typeof LegalAssistantQueryInputSchema,
  typeof LegalAssistantQueryOutputSchema
>({
  name: 'legalAssistantQueryFlow',
  inputSchema: LegalAssistantQueryInputSchema,
  outputSchema: LegalAssistantQueryOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});