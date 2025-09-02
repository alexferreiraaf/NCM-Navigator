import NcmChapters from '@/components/ncm-chapters';
import NcmSearch from '@/components/ncm-search';
import { BrainCircuit } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-gradient-to-r from-[#6366F1] to-[#3B82F6] p-4 text-primary-foreground shadow-lg md:p-8">
        <div className="mx-auto flex max-w-7xl items-center gap-4">
          <BrainCircuit className="hidden h-16 w-16 shrink-0 md:block" />
          <div>
            <h1 className="text-3xl font-bold md:text-5xl">NCM Navigator</h1>
            <p className="mt-1 text-lg opacity-90">
              Sua ferramenta inteligente para navegar na Nomenclatura Comum do
              Mercosul.
            </p>
          </div>
        </div>
      </header>
      <main className="p-4 md:p-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <NcmSearch />
          <NcmChapters />
        </div>
      </main>
      <footer className="py-8 text-center text-muted-foreground">
        <p>NCM Navigator - Powered by AI</p>
      </footer>
    </div>
  );
}
