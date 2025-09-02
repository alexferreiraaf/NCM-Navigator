'use server';

/**
 * @fileOverview Implements the Intelligent Product Search flow.
 *
 * - intelligentProductSearch - A function that takes a product name and returns the most probable NCM and a brief description.
 * - IntelligentProductSearchInput - The input type for the intelligentProductSearch function.
 * - IntelligentProductSearchOutput - The return type for the intelligentProductSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentProductSearchInputSchema = z.object({
  productName: z.string().describe('The name of the product to search for.'),
});
export type IntelligentProductSearchInput = z.infer<typeof IntelligentProductSearchInputSchema>;

const IntelligentProductSearchOutputSchema = z.object({
  ncmCode: z.string().describe('The most probable NCM code for the product.'),
  description: z.string().describe('A brief description of the product and its NCM classification.'),
});
export type IntelligentProductSearchOutput = z.infer<typeof IntelligentProductSearchOutputSchema>;

export async function intelligentProductSearch(input: IntelligentProductSearchInput): Promise<IntelligentProductSearchOutput> {
  return intelligentProductSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentProductSearchPrompt',
  input: {schema: IntelligentProductSearchInputSchema},
  output: {schema: IntelligentProductSearchOutputSchema},
  prompt: `You are an expert in product classification using the NCM (Mercosur Common Nomenclature) codes.
  Given a product name, you will identify the most probable NCM code and provide a brief description explaining the classification.

  Product Name: {{{productName}}}

  Respond with the NCM code and a brief description.
  The NCM code must be a string of 8 digits.
  The description must be under 200 characters.
  The output must be in the following JSON format:
  {
    "ncmCode": "[NCM code]",
    "description": "[brief description]"
  }`,
});

const intelligentProductSearchFlow = ai.defineFlow(
  {
    name: 'intelligentProductSearchFlow',
    inputSchema: IntelligentProductSearchInputSchema,
    outputSchema: IntelligentProductSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
