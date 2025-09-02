"use client";

import type { NCM } from "@/data/ncm-chapters";
import { useState } from "react";
import { getNCDetails } from "@/ai/flows/ai-powered-ncm-details";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Check,
  Sparkles,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Card, CardContent } from "./ui/card";

type NcmItemProps = {
  ncm: NCM;
};

export default function NcmItem({ ncm }: NcmItemProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [details, setDetails] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    const codeToCopy = ncm.code.replace(/\./g, "");
    navigator.clipboard.writeText(codeToCopy);
    setIsCopied(true);
    toast({
      title: "Copiado!",
      description: `O código ${ncm.code} foi copiado.`,
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleGetDetails = async () => {
    // If details are already loaded, just toggle visibility
    if (details) {
      setIsExpanded(!isExpanded);
      return;
    }

    setIsLoading(true);
    setError(null);
    setIsExpanded(true);

    try {
      const result = await getNCDetails({ ncmCode: ncm.code });
      setDetails(result.detailedDescription);
    } catch (e) {
      setError("Não foi possível carregar os detalhes. Tente novamente.");
      console.error(e);
      setIsExpanded(false); // Collapse on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-4 first:pt-0">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:w-auto">
          <p className="font-mono text-base md:text-lg text-accent">{ncm.code}</p>
          <p className="text-sm md:text-base text-muted-foreground">{ncm.description}</p>
        </div>
        <div className="flex w-full shrink-0 gap-2 sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="w-full sm:w-auto"
          >
            {isCopied ? (
              <Check className="mr-2 h-4 w-4" />
            ) : (
              <Copy className="mr-2 h-4 w-4" />
            )}
            {isCopied ? "Copiado" : "Copiar"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleGetDetails}
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                <span>Detalhes</span>
                {details && (
                  isExpanded ? <ChevronUp className="ml-2 h-4 w-4"/> : <ChevronDown className="ml-2 h-4 w-4"/>
                )
                }
              </>
            )}
          </Button>
        </div>
      </div>

      {error && !isLoading && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isExpanded && details && (
        <Card className="mt-4 bg-background">
          <CardContent className="pt-6">
            <p className="whitespace-pre-wrap text-sm leading-relaxed">
              {details}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
