"use client";

import { ncmChapters } from "@/data/ncm-chapters";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NcmItem from "./ncm-item";

export default function NcmChapters() {
  return (
    <section>
      <h2 className="text-2xl font-bold md:text-3xl">
        Navegação por Capítulos
      </h2>
      <p className="mt-2 text-muted-foreground">
        Explore a estrutura da NCM capítulo por capítulo. Clique em um capítulo
        para expandir.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full">
        {ncmChapters.map((chapter) => (
          <AccordionItem
            value={`chapter-${chapter.chapter}`}
            key={chapter.chapter}
          >
            <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline">
              Capítulo {chapter.chapter}: {chapter.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 divide-y divide-border pt-2">
                {chapter.ncms.map((ncm) => (
                  <NcmItem ncm={ncm} key={ncm.code} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
