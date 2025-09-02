// src/ai/flows/ai-powered-ncm-details.ts
'use server';

/**
 * @fileOverview An AI agent that provides detailed information about a specific NCM (Mercosur Common Nomenclature) code.
 *
 * - getNCDetails - A function that retrieves detailed information about an NCM code using AI.
 * - GetNCDetailsInput - The input type for the getNCDetails function.
 * - GetNCDetailsOutput - The return type for the getNCDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetNCDetailsInputSchema = z.object({ncmCode: z.string().describe('The NCM code to retrieve details for.')});
export type GetNCDetailsInput = z.infer<typeof GetNCDetailsInputSchema>;

const GetNCDetailsOutputSchema = z.object({
  detailedDescription: z
    .string()
    .describe('A detailed and comprehensive description, context, and examples for the specified NCM code.'),
});
export type GetNCDetailsOutput = z.infer<typeof GetNCDetailsOutputSchema>;

export async function getNCDetails(input: GetNCDetailsInput): Promise<GetNCDetailsOutput> {
  return getNCDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getNCDetailsPrompt',
  input: {schema: GetNCDetailsInputSchema},
  output: {schema: GetNCDetailsOutputSchema},
  prompt: `You are an expert in the Mercosur Common Nomenclature (NCM). Provide a detailed and comprehensive description, context, and examples for the following NCM code:

NCM Code: {{{ncmCode}}}

Your description should be thorough and easy to understand, providing practical examples of products that fall under this NCM code. Focus on providing enough information so someone can fully understand its application.`,
});

const getNCDetailsFlow = ai.defineFlow(
  {
    name: 'getNCDetailsFlow',
    inputSchema: GetNCDetailsInputSchema,
    outputSchema: GetNCDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
