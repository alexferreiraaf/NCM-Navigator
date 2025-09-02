"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  intelligentProductSearch,
  type IntelligentProductSearchOutput,
} from "@/ai/flows/intelligent-product-search";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Loader2,
  Search,
  Sparkles,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

const formSchema = z.object({
  productName: z.string().min(3, {
    message: "O nome do produto deve ter pelo menos 3 caracteres.",
  }),
});

export default function NcmSearch() {
  const [result, setResult] = useState<IntelligentProductSearchOutput | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const searchPromise = intelligentProductSearch({
      productName: values.productName,
    });

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), 3000)
    );

    try {
      const searchResult = await Promise.race([searchPromise, timeoutPromise]);
      setResult(searchResult);
    } catch (e: any) {
      if (e.message === "Timeout") {
        setError("Tempo de resposta excedido. Tente novamente.");
      } else {
        setError("Ocorreu um erro ao buscar o NCM. Tente novamente.");
        console.error(e);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = () => {
    if (!result?.ncmCode) return;
    const codeToCopy = result.ncmCode.replace(/\./g, "");
    navigator.clipboard.writeText(codeToCopy);
    setIsCopied(true);
    toast({
      title: "Copiado!",
      description: `O código ${result.ncmCode} foi copiado.`,
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            Busca Inteligente de Produtos
          </CardTitle>
          <CardDescription>
            Digite o nome de um produto e deixe a IA encontrar o NCM mais
            provável.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <FormControl>
                        <Input
                          placeholder="Ex: Notebook"
                          className="pl-10"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Buscando...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Buscar com IA
                  </>
                )}
              </Button>
            </form>
          </Form>

          {error && (
            <Alert variant="destructive" className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <Card className="mt-6 bg-secondary">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Resultado da Busca</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    aria-label="Copiar código NCM"
                  >
                    {isCopied ? (
                      <Check className="mr-2 h-4 w-4" />
                    ) : (
                      <Copy className="mr-2 h-4 w-4" />
                    )}
                    {isCopied ? "Copiado" : "Copiar"}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Código NCM
                  </p>
                  <p className="font-mono text-2xl text-accent">
                    {result.ncmCode}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Descrição
                  </p>
                  <p>{result.description}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
