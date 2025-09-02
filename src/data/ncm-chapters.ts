export type NCM = {
  code: string;
  description: string;
};

export type NCMChapter = {
  chapter: string;
  title: string;
  ncms: NCM[];
};

export const ncmChapters: NCMChapter[] = [
  {
    chapter: '01',
    title: 'Animais vivos',
    ncms: [
      {
        code: '0101.21.00',
        description: 'Reprodutores de raça pura',
      },
      {
        code: '0101.29.00',
        description: 'Outros cavalos',
      },
      {
        code: '0102.21.10',
        description: 'Prenhes ou com cria ao pé',
      },
    ],
  },
  {
    chapter: '02',
    title: 'Carnes e miudezas, comestíveis',
    ncms: [
      {
        code: '0201.10.00',
        description: 'Carcaças e meias-carcaças de bovinos, frescas ou refrigeradas',
      },
      {
        code: '0207.11.00',
        description: 'Não cortadas em pedaços, frescas ou refrigeradas (Galo/Galinha)',
      },
    ],
  },
  {
    chapter: '84',
    title: 'Reatores nucleares, caldeiras, máquinas, aparelhos e instrumentos mecânicos, e suas partes',
    ncms: [
        {
            code: '8471.30.12',
            description: 'De peso inferior a 3, 5 kg, com teclado alfanumérico de no mínimo 70 teclas e com uma tela de área não superior a 140 cm2'
        },
        {
            code: '8471.50.10',
            description: 'De pequena capacidade, baseadas em microprocessadores, com capacidade de instalação, dentro do mesmo gabinete, de unidades de memória da subposição 8471.70, podendo conter múltiplos conectores de expansão (slots), e valor FOB inferior ou igual a US$ 12.500,00, por unidade'
        },
        {
            code: '8473.30.41',
            description: 'Placas-mãe (mother boards)'
        }
    ]
  },
   {
    chapter: '90',
    title: 'Instrumentos e aparelhos de óptica, de fotografia, de cinematografia, de medida, de controle ou de precisão; instrumentos e aparelhos médico-cirúrgicos; suas partes e acessórios',
    ncms: [
        {
            code: '9006.53.20',
            description: 'Outras, para câmeras fotográficas'
        },
        {
            code: '9025.11.10',
            description: 'Termômetros clínicos'
        },
        {
            code: '9026.20.90',
            description: 'Outros manômetros'
        }
    ]
  }
];
