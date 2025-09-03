
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
        { code: '0102.21.90', description: 'Bovinos vivos, da espécie doméstica, puros de reprodução' },
        { code: '0103.92.00', description: 'Suínos, exceto puros de reprodução, de peso igual ou superior a 50 kg' }
    ],
  },
  {
    chapter: '02',
    title: 'Carnes e miudezas, comestíveis',
    ncms: [
        { code: '0207.14.00', description: 'Pedaços e miudezas de galos e galinhas' },
        { code: '0201.20.90', description: 'Outras carnes de animais da espécie bovina' }
    ],
  },
  {
    chapter: '03',
    title: 'Peixes e crustáceios, moluscos e outros invertebrados aquáticos',
    ncms: [
        { code: '0304.48.00', description: 'Filés de peixes frescos ou refrigerados' },
        { code: '0306.17.90', description: 'Camarões inteiros ou em pedaços' }
    ],
  },
  {
    chapter: '04',
    title: 'Leite e lacticínios; ovos de aves; mel natural; produtos comestíveis de origem animal, não especificados nem compreendidos noutros Capítulos',
    ncms: [
        { code: '0406.10.10', description: 'Queijos frescos (não curados), incluindo queijo de soro' },
        { code: '0403.10.00', description: 'Iogurte' }
    ],
  },
  {
    chapter: '05',
    title: 'Outros produtos de origem animal, não especificados nem compreendidos noutros Capítulos',
    ncms: [
        { code: '0505.10.00', description: 'Penas e penugem de galos e galinhas' },
        { code: '0506.10.00', description: 'Ossos e chifres não trabalhados' }
    ],
  },
  {
    chapter: '06',
    title: 'Plantas vivas e produtos de floricultura',
    ncms: [
        { code: '0602.90.90', description: 'Outras plantas vivas' },
        { code: '0603.11.00', description: 'Rosas frescas' }
    ],
  },
  {
    chapter: '07',
    title: 'Produtos hortícolas, plantas, raízes e tubérculos, comestíveis',
    ncms: [
        { code: '0709.99.00', description: 'Outros produtos hortícolas frescos ou refrigerados' },
        { code: '0702.00.00', description: 'Tomates frescos ou refrigerados' }
    ],
  },
  {
    chapter: '08',
    title: 'Frutas; cascas de citrinos e de melões',
    ncms: [
        { code: '0805.10.00', description: 'Laranjas, frescas ou secas' },
        { code: '0808.10.00', description: 'Maçãs, frescas' }
    ],
  },
  {
    chapter: '09',
    title: 'Café, chá, mate e especiarias',
    ncms: [
        { code: '0901.11.10', description: 'Café não torrado, não descafeinado' },
        { code: '0902.10.00', description: 'Chá verde (não fermentado)' }
    ],
  },
  {
    chapter: '10',
    title: 'Cereais',
    ncms: [
        { code: '1001.99.90', description: 'Outros trigos e misturas de trigo e centeio' },
        { code: '1006.30.21', description: 'Arroz semibranqueado ou branqueado, mesmo polido ou glaciado' }
    ],
  },
  {
    chapter: '11',
    title: 'Produtos da indústria de moagem; malte; amidos e féculas; inulina; glúten de trigo',
    ncms: [
        { code: '1101.00.10', description: 'Farinha de trigo, de milho' },
        { code: '1108.12.00', description: 'Fécula de milho (amido de milho)' }
    ],
  },
  {
    chapter: '12',
    title: 'Sementes e frutos oleaginosos; grãos, sementes e frutos diversos; plantas industriais ou medicinais; palhas e forragens',
    ncms: [
        { code: '1202.42.00', description: 'Amendoim, mesmo descascado, quebrado' },
        { code: '1207.29.90', description: 'Outras sementes de algodão' }
    ],
  },
  {
    chapter: '13',
    title: 'Gomas, resinas e outros sucos e extratos vegetais',
    ncms: [
        { code: '1301.90.90', description: 'Outras gomas e resinas naturais' },
        { code: '1302.19.90', description: 'Outros sucos e extratos vegetais' }
    ],
  },
  {
    chapter: '14',
    title: 'Matérias para entrançar e outros produtos de origem vegetal, não especificados nem compreendidos noutros Capítulos',
    ncms: [
        { code: '1401.90.00', description: 'Outras matérias vegetais' },
        { code: '1404.90.00', description: 'Outras matérias vegetais não especificadas' }
    ],
  },
  {
    chapter: '15',
    title: 'Gorduras e óleos animais, vegetais ou de origem microbiana e produtos da sua dissociação; gorduras alimentícias elaboradas; ceras de origem animal ou vegetal',
    ncms: [
        { code: '1509.10.00', description: 'Azeite de oliva virgem' },
        { code: '1512.11.00', description: 'Óleo de girassol em bruto' }
    ],
  },
  {
    chapter: '16',
    title: 'Preparações de carne, de peixes, de crustáceos, de moluscos ou de outros invertebrados aquáticos, ou de insetos',
    ncms: [
        { code: '1602.50.00', description: 'Preparações e conservas de carne' },
        { code: '1604.14.10', description: 'Atuns, em azeite, óleos ou vinagres' }
    ],
  },
  {
    chapter: '17',
    title: 'Açúcares e produtos de confeitaria',
    ncms: [
        { code: '1701.99.00', description: 'Outros açúcares de cana ou de beterraba' },
        { code: '1704.90.90', description: 'Outros produtos de confeitaria sem cacau' }
    ],
  },
  {
    chapter: '18',
    title: 'Cacau e suas preparações',
    ncms: [
        { code: '1806.90.00', description: 'Outros chocolates e outras preparações alimentícias que contenham cacau' }
    ],
  },
  {
    chapter: '19',
    title: 'Preparações à base de cereais, de farinhas, de amidos, de féculas ou de leite; produtos de pastelaria',
    ncms: [
        { code: '1905.90.90', description: 'Produtos de panificação, pastelaria ou da indústria de bolachas' },
        { code: '1905.31.00', description: 'Bolachas e biscoitos recheados' }
    ],
  },
  {
    chapter: '20',
    title: 'Preparações de produtos hortícolas, de frutas ou de outras partes de plantas',
    ncms: [
        { code: '2005.99.00', description: 'Outros produtos hortícolas preparados ou em conserva' },
        { code: '2007.99.90', description: 'Outras geleias, doces de frutas, etc.' }
    ],
  },
  {
    chapter: '21',
    title: 'Preparações alimentícias diversas',
    ncms: [
        { code: '2103.90.11', description: 'Molho de tomate preparado' },
        { code: '2103.20.10', description: 'Ketchup e outros molhos de tomate' }
    ],
  },
  {
    chapter: '22',
    title: 'Bebidas, líquidos alcoólicos e vinagres',
    ncms: [
        { code: '2204.21.00', description: 'Vinhos de uvas frescas, em recipientes de capacidade não superior a 2 litros' },
        { code: '2208.90.00', description: 'Outros líquidos fermentados ou destilados' }
    ],
  },
  {
    chapter: '23',
    title: 'Resíduos e desperdícios das indústrias alimentares; alimentos preparados para animais',
    ncms: [
        { code: '2309.90.90', description: 'Outras preparações de uso na alimentação de animais' }
    ],
  },
  {
    chapter: '24',
    title: 'Tabaco e seus sucedâneos manufaturados; produtos, mesmo com nicotina, destinados à inalação sem combustão; outros produtos que contenham nicotina destinados à absorção da nicotina pelo corpo humano',
    ncms: [
        { code: '2402.20.00', description: 'Cigarros' },
        { code: '2403.99.90', description: 'Outros tabacos manufaturados' }
    ],
  },
  {
    chapter: '25',
    title: 'Sal; enxofre; terras e pedras; gesso, cal e cimento',
    ncms: [
        { code: '2501.00.11', description: 'Sal de cozinha (sal de mesa), refinado' },
        { code: '2505.90.00', description: 'Outras areias naturais' }
    ],
  },
  {
    chapter: '26',
    title: 'Minérios, escórias e cinzas',
    ncms: [
        { code: '2601.11.00', description: 'Minérios de ferro e seus concentrados' },
        { code: '2616.90.00', description: 'Minérios de prata e seus concentrados' }
    ],
  },
  {
    chapter: '27',
    title: 'Combustíveis minerais, óleos minerais e produtos da sua destilação; matérias betuminosas; ceras minerais',
    ncms: [
        { code: '2710.19.32', description: 'Óleos lubrificantes, com aditivos' },
        { code: '2716.00.00', description: 'Energia elétrica' }
    ],
  },
  {
    chapter: '28',
    title: 'Produtos químicos inorgânicos; compostos inorgânicos ou orgânicos de metais preciosos, de elementos radioativos, de metais das terras raras ou de isótopos',
    ncms: [
        { code: '2811.22.10', description: 'Dióxido de silício' },
        { code: '2833.25.00', description: 'Sulfato de cobre' }
    ],
  },
  {
    chapter: '29',
    title: 'Produtos químicos orgânicos',
    ncms: [
        { code: '2905.11.00', description: 'Metanol (álcool metílico)' },
        { code: '2915.21.00', description: 'Ácido acético' }
    ],
  },
  {
    chapter: '30',
    title: 'Produtos farmacêuticos',
    ncms: [
        { code: '3004.90.99', description: 'Outros medicamentos, dosados' },
        { code: '3005.10.90', description: 'Outros adesivos, ligaduras, etc.' }
    ],
  },
  {
    chapter: '31',
    title: 'Adubos ou fertilizantes',
    ncms: [
        { code: '3102.10.10', description: 'Ureia' },
        { code: '3105.20.00', description: 'Adubos minerais ou químicos, com os três elementos fertilizantes: nitrogênio, fósforo e potássio' }
    ],
  },
  {
    chapter: '32',
    title: 'Extratos tanantes e tintoriais; taninos e seus derivados; pigmentos e outras matérias corantes; tintas e vernizes; mástiques; tintas de escrever',
    ncms: [
        { code: '3204.17.00', description: 'Pigmentos e outras preparações à base de pigmentos' },
        { code: '3208.90.39', description: 'Outras tintas e vernizes, à base de polímeros acrílicos' }
    ],
  },
  {
    chapter: '33',
    title: 'Óleos essenciais e resinoides; produtos de perfumaria ou de toucador preparados e preparações cosméticas',
    ncms: [
        { code: '3304.99.10', description: 'Cremes de beleza e loções' },
        { code: '3305.10.00', description: 'Xampus' }
    ],
  },
  {
    chapter: '34',
    title: 'Sabões, agentes orgânicos de superfície, preparações para lavagem, preparações lubrificantes, ceras artificiais, ceras preparadas, produtos de conservação e limpeza, velas e artigos semelhantes, massas ou pastas para modelar, “ceras para dentistas” e composições para dentistas à base de gesso',
    ncms: [
        { code: '3401.19.00', description: 'Sabões, sabonetes, detergentes orgânicos de superfície' },
        { code: '3402.20.00', description: 'Preparações tensoativas, de lavar' }
    ],
  },
  {
    chapter: '35',
    title: 'Matérias albuminoides; produtos à base de amidos ou de féculas modificados; colas; enzimas',
    ncms: [
        { code: '3505.10.00', description: 'Dextrina e outros amidos modificados' },
        { code: '3506.10.90', description: 'Outras colas e adesivos' }
    ],
  },
  {
    chapter: '36',
    title: 'Pólvoras e explosivos; artigos de pirotecnia; fósforos; ligas pirofóricas; matérias inflamáveis',
    ncms: [
        { code: '3606.10.00', description: 'Ferrocerio e outras ligas pirofóricas' }
    ],
  },
  {
    chapter: '37',
    title: 'Produtos para fotografia e cinematografia',
    ncms: [
        { code: '3701.10.10', description: 'Chapas e filmes planos para fotografia' },
        { code: '3702.10.10', description: 'Filmes cinematográficos' }
    ],
  },
  {
    chapter: '38',
    title: 'Produtos diversos das indústrias químicas',
    ncms: [
        { code: '3808.94.19', description: 'Outros desinfetantes' },
        { code: '3820.00.00', description: 'Preparados anticongelantes e líquidos para descongelar' }
    ],
  },
  {
    chapter: '39',
    title: 'Plásticos e suas obras',
    ncms: [
        { code: '3924.90.00', description: 'Outros artigos de uso doméstico e artigos de higiene ou de toucador, de plástico' },
        { code: '3926.90.90', description: 'Outras obras de plástico' }
    ],
  },
  {
    chapter: '40',
    title: 'Borracha e suas obras',
    ncms: [
        { code: '4011.10.00', description: 'Pneus novos de borracha, dos tipos utilizados em automóveis de passageiros' },
        { code: '4016.99.90', description: 'Outras obras de borracha vulcanizada' }
    ],
  },
  {
    chapter: '41',
    title: 'Peles, exceto as peles com pelo, e couros',
    ncms: [
        { code: '4101.90.00', description: 'Peles em bruto de bovinos, exceto puros de reprodução' },
        { code: '4102.10.00', description: 'Peles de ovinos em bruto, com lã, não depiladas' }
    ],
  },
  {
    chapter: '42',
    title: 'Obras de couro; artigos de correeiro ou de seleiro; artigos de viagem, bolsas e artefatos semelhantes; obras de tripa',
    ncms: [
        { code: '4202.11.00', description: 'Malas e maletas de viagem, de couro natural' },
        { code: '4203.10.00', description: 'Vestuário de couro natural' }
    ],
  },
  {
    chapter: '43',
    title: 'Peles com pelo e suas obras; peles com pelo artificiais',
    ncms: [
        { code: '4301.90.00', description: 'Outras peles com pelo em bruto' }
    ],
  },
  {
    chapter: '44',
    title: 'Madeira, carvão vegetal e obras de madeira',
    ncms: [
        { code: '4407.10.00', description: 'Madeira serrada ou fendida longitudinalmente' },
        { code: '4408.10.00', description: 'Folhas para folheados de coníferas' }
    ],
  },
  {
    chapter: '45',
    title: 'Cortiça e suas obras',
    ncms: [
        { code: '4503.10.00', description: 'Rolhas e cápsulas de cortiça natural' }
    ],
  },
  {
    chapter: '46',
    title: 'Obras de espartaria ou de cestaria',
    ncms: [
        { code: '4602.19.00', description: 'Outras obras de esparto, vime, cana-de-açúcar, etc.' }
    ],
  },
  {
    chapter: '47',
    title: 'Pastas de madeira ou de outras matérias fibrosas celulósicas; papel ou cartão para reciclar (desperdícios e aparas)',
    ncms: [
        { code: '4703.21.00', description: 'Pastas químicas de madeira, semibranqueadas ou branqueadas' }
    ],
  },
  {
    chapter: '48',
    title: 'Papel e cartão; obras de pasta de celulose, de papel ou de cartão',
    ncms: [
        { code: '4802.56.10', description: 'Papel e cartão para escrita, impressão ou outros fins gráficos' },
        { code: '4811.51.10', description: 'Papel e cartão revestidos de plástico, com peso superior a 150 g/m²' }
    ],
  },
  {
    chapter: '49',
    title: 'Livros, jornais, gravuras e outros produtos das indústrias gráficas; textos manuscritos ou datilografados e plantas',
    ncms: [
        { code: '4901.99.00', description: 'Outros livros, brochuras e impressos semelhantes' }
    ],
  },
  {
    chapter: '50',
    title: 'Seda',
    ncms: [
        { code: '5007.20.00', description: 'Tecidos de seda ou de desperdícios de seda' }
    ],
  },
  {
    chapter: '51',
    title: 'Lã, pelos finos ou grosseiros; fios e tecidos de crina',
    ncms: [
        { code: '5105.10.00', description: 'Lã cardada ou penteada' }
    ],
  },
  {
    chapter: '52',
    title: 'Algodão',
    ncms: [
        { code: '5201.00.00', description: 'Algodão não cardado nem penteado' },
        { code: '5205.11.00', description: 'Fios de algodão com um teor de algodão superior ou igual a 85%' }
    ],
  },
  {
    chapter: '53',
    title: 'Outras fibras têxteis vegetais; fios de papel e tecidos de fios de papel',
    ncms: [
        { code: '5307.10.10', description: 'Fios de juta ou de outras fibras têxteis' }
    ],
  },
  {
    chapter: '54',
    title: 'Filamentos sintéticos ou artificiais; lâminas e formas semelhantes de matérias têxteis sintéticas ou artificiais',
    ncms: [
        { code: '5402.33.00', description: 'Fios de filamentos de poliéster, texturizados' }
    ],
  },
  {
    chapter: '55',
    title: 'Fibras sintéticas ou artificiais, descontínuas',
    ncms: [
        { code: '5509.53.00', description: 'Fios de fibras sintéticas' }
    ],
  },
  {
    chapter: '56',
    title: 'Pastas (ouates), feltros e falsos tecidos; fios especiais; cordéis, cordas e cabos; artigos de cordoaria',
    ncms: [
        { code: '5603.94.90', description: 'Outros falsos tecidos de peso superior a 150 g/m²' }
    ],
  },
  {
    chapter: '57',
    title: 'Tapetes e outros revestimentos para pisos, de matérias têxteis',
    ncms: [
        { code: '5703.20.00', description: 'Tapetes de náilon ou de outras poliamidas' }
    ],
  },
  {
    chapter: '58',
    title: 'Tecidos especiais; tecidos tufados; rendas; tapeçarias; passamanarias; bordados',
    ncms: [
        { code: '5801.37.00', description: 'Veludos e pelúcias tecidos, de outras matérias têxteis' }
    ],
  },
  {
    chapter: '59',
    title: 'Tecidos impregnados, revestidos, recobertos ou estratificados; artigos para usos técnicos de matérias têxteis',
    ncms: [
        { code: '5903.90.00', description: 'Tecidos impregnados, revestidos, recobertos ou estratificados' }
    ],
  },
  {
    chapter: '60',
    title: 'Tecidos de malha',
    ncms: [
        { code: '6005.32.00', description: 'Outros tecidos de malha de algodão' }
    ],
  },
  {
    chapter: '61',
    title: 'Vestuário e seus acessórios, de malha',
    ncms: [
        { code: '6109.10.00', description: 'Camisetas de algodão, de malha' },
        { code: '6104.41.00', description: 'Vestidos de lã ou de pelos finos, de malha' }
    ],
  },
  {
    chapter: '62',
    title: 'Vestuário e seus acessórios, exceto de malha',
    ncms: [
        { code: '6203.22.00', description: 'Casacos, jaquetas, calças, jardineiras, bermudas e shorts de algodão' }
    ],
  },
  {
    chapter: '63',
    title: 'Outros artefatos têxteis confeccionados; sortidos; artefatos de matérias têxteis, calçados, chapéus e artefatos de uso semelhante, usados; trapos',
    ncms: [
        { code: '6307.90.90', description: 'Outros artefatos têxteis confeccionados' }
    ],
  },
  {
    chapter: '64',
    title: 'Calçados, polainas e artefatos semelhantes; suas partes',
    ncms: [
        { code: '6403.99.90', description: 'Outros calçados com sola exterior de couro natural ou couro reconstituído' },
        { code: '6404.11.00', description: 'Calçados de esporte, de tênis, de basquetebol' }
    ],
  },
  {
    chapter: '65',
    title: 'Chapéus e suas partes',
    ncms: [
        { code: '6505.00.10', description: 'Chapéus de palha, feltro ou outras matérias' }
    ],
  },
  {
    chapter: '66',
    title: 'Guarda-chuvas, sombrinhas, guarda-sóis, bengalas, bengalas-assentos, chicotes, e suas partes',
    ncms: [
        { code: '6601.91.10', description: 'Guarda-chuvas de cabo telescópico' }
    ],
  },
  {
    chapter: '67',
    title: 'Penas e penugem preparadas e suas obras; flores artificiais; obras de cabelo',
    ncms: [
        { code: '6701.00.00', description: 'Peles com pelo e suas partes, com pelo' }
    ],
  },
  {
    chapter: '68',
    title: 'Obras de pedra, gesso, cimento, amianto, mica ou de matérias semelhantes',
    ncms: [
        { code: '6810.19.00', description: 'Outras obras de cimento, betão ou pedra artificial' }
    ],
  },
  {
    chapter: '69',
    title: 'Produtos cerâmicos',
    ncms: [
        { code: '6914.90.00', description: 'Outros artefatos de cerâmica' },
        { code: '6907.21.00', description: 'Ladrilhos e lajes de cerâmica, para pavimentação ou revestimento' }
    ],
  },
  {
    chapter: '70',
    title: 'Vidro e suas obras',
    ncms: [
        { code: '7013.99.00', description: 'Outros artigos de vidro para a mesa, cozinha, toucador, etc.' },
        { code: '7019.52.00', description: 'Tecidos de fibras de vidro' }
    ],
  },
  {
    chapter: '71',
    title: 'Pérolas naturais ou cultivadas, pedras preciosas ou semipreciosas e semelhantes, metais preciosos, metais folheados ou chapeados de metais preciosos (plaquê), e suas obras; bijuterias; moedas',
    ncms: [
        { code: '7101.21.00', description: 'Pérolas cultivadas, não trabalhadas, em bruto' },
        { code: '7102.10.00', description: 'Diamantes não montados nem engastados' }
    ],
  },
  {
    chapter: '72',
    title: 'Ferro fundido, ferro e aço',
    ncms: [
        { code: '7210.49.10', description: 'Chapas e tiras de ferro ou aço, de espessura inferior a 3 mm' }
    ],
  },
  {
    chapter: '73',
    title: 'Obras de ferro fundido, ferro ou aço',
    ncms: [
        { code: '7308.90.90', description: 'Outras obras de ferro ou aço' },
        { code: '7323.93.00', description: 'Utensílios de mesa, de cozinha e outros artigos de uso doméstico de aço inoxidável' }
    ],
  },
  {
    chapter: '74',
    title: 'Cobre e suas obras',
    ncms: [
        { code: '7411.10.10', description: 'Tubos de cobre refinado' }
    ],
  },
  {
    chapter: '75',
    title: 'Níquel e suas obras',
    ncms: [
        { code: '7508.90.00', description: 'Outras obras de níquel' }
    ],
  },
  {
    chapter: '76',
    title: 'Alumínio e suas obras',
    ncms: [
        { code: '7606.11.90', description: 'Outras chapas e tiras de alumínio, não ligadas' }
    ],
  },
  { chapter: '77', title: 'Não alocado', ncms: [] },
  {
    chapter: '78',
    title: 'Chumbo e suas obras',
    ncms: [
        { code: '7806.00.00', description: 'Outras obras de chumbo' }
    ],
  },
  {
    chapter: '79',
    title: 'Zinco e suas obras',
    ncms: [
        { code: '7901.11.10', description: 'Zinco não ligado, com um teor de zinco igual ou superior a 99,99 %' }
    ],
  },
  {
    chapter: '80',
    title: 'Estanho e suas obras',
    ncms: [
        { code: '8003.00.00', description: 'Barras, perfis e fios de estanho' }
    ],
  },
  {
    chapter: '81',
    title: 'Outros metais comuns; cermets; obras dessas matérias',
    ncms: [
        { code: '8101.10.00', description: 'Tungstênio em pó' }
    ],
  },
  {
    chapter: '82',
    title: 'Ferramentas, artefatos de cutelaria e talheres, e suas partes, de metais comuns',
    ncms: [
        { code: '8205.59.00', description: 'Outras ferramentas manuais' }
    ],
  },
  {
    chapter: '83',
    title: 'Obras diversas de metais comuns',
    ncms: [
        { code: '8302.42.00', description: 'Fechaduras e ferrolhos para móveis' }
    ],
  },
  {
    chapter: '84',
    title: 'Reatores nucleares, caldeiras, máquinas, aparelhos e instrumentos mecânicos, e suas partes',
    ncms: [
        { code: '8471.50.10', description: 'Unidades de processamento, de pequeno porte' },
        { code: '8471.60.52', description: 'Mouse' }
    ],
  },
  {
    chapter: '85',
    title: 'Máquinas, aparelhos e materiais elétricos, e suas partes; aparelhos de gravação ou de reprodução de som, aparelhos de gravação ou de reprodução de imagens e de som em televisão, e suas partes e acessórios',
    ncms: [
        { code: '8518.29.90', description: 'Outros alto-falantes de uso profissional' },
        { code: '8518.30.00', description: 'Fones de ouvido e microfones' }
    ],
  },
  {
    chapter: '86',
    title: 'Veículos e material para vias férreas ou semelhantes, e suas partes; aparelhos mecânicos (incluindo os eletromecânicos) de sinalização para vias de comunicação',
    ncms: [
        { code: '8607.19.00', description: 'Outras partes de locomotivas' }
    ],
  },
  {
    chapter: '87',
    title: 'Veículos automóveis, tratores, ciclos e outros veículos terrestres, suas partes e acessórios',
    ncms: [
        { code: '8708.99.90', description: 'Outras partes e acessórios de veículos automóveis' },
        { code: '8703.23.10', description: 'Automóveis de passageiros de cilindrada superior a 1500 cm³' }
    ],
  },
  {
    chapter: '88',
    title: 'Aeronaves e aparelhos espaciais, e suas partes',
    ncms: [
        { code: '8802.40.90', description: 'Outras aeronaves' }
    ],
  },
  {
    chapter: '89',
    title: 'Embarcações e estruturas flutuantes',
    ncms: [
        { code: '8903.91.00', description: 'Barcos a vela, com ou sem motor auxiliar' }
    ],
  },
  {
    chapter: '90',
    title: 'Instrumentos e aparelhos de óptica, de fotografia, de cinematografia, de medida, de controle ou de precisão; instrumentos e aparelhos médico-cirúrgicos; suas partes e acessórios',
    ncms: [
        { code: '9005.80.00', description: 'Outros instrumentos e aparelhos astronômicos' },
        { code: '9018.90.99', description: 'Outros instrumentos e aparelhos de medicina, cirurgia, odontologia' }
    ],
  },
  {
    chapter: '91',
    title: 'Aparelhos de relojoaria e suas partes',
    ncms: [
        { code: '9102.11.10', description: 'Relógios de pulso de corda automática' }
    ],
  },
  {
    chapter: '92',
    title: 'Instrumentos musicais; suas partes e acessórios',
    ncms: [
        { code: '9207.90.00', description: 'Outros instrumentos musicais' }
    ],
  },
  {
    chapter: '93',
    title: 'Armas e munições; suas partes e acessórios',
    ncms: [
        { code: '9304.00.00', description: 'Outras armas' },
        { code: '9306.90.00', description: 'Outras munições, e seus cartuchos' }
    ],
  },
  {
    chapter: '94',
    title: 'Móveis; mobiliário médico-cirúrgico; colchões, almofadas e semelhantes; aparelhos de iluminação não especificados nem compreendidos noutros Capítulos; anúncios, cartazes e tabuletas, luminosos e artigos semelhantes; construções pré-fabricadas',
    ncms: [
        { code: '9403.60.00', description: 'Outros móveis de madeira' },
        { code: '9401.71.00', description: 'Assentos estofados de estrutura de madeira, não giratórios' }
    ],
  },
  {
    chapter: '95',
    title: 'Brinquedos, jogos, artigos para divertimento ou para esporte; suas partes e acessórios',
    ncms: [
        { code: '9503.00.99', description: 'Outros brinquedos' }
    ],
  },
  {
    chapter: '96',
    title: 'Obras diversas',
    ncms: [
        { code: '9603.29.00', description: 'Vassouras, escovas, pincéis e artefatos semelhantes de uso doméstico' },
        { code: '9608.10.00', description: 'Canetas esferográficas' }
    ],
  },
  {
    chapter: '97',
    title: 'Objetos de arte, de coleção e antiguidades',
    ncms: [
        { code: '9701.10.00', description: 'Pinturas, desenhos e pastéis, feitos inteiramente à mão' },
        { code: '9703.00.00', description: 'Obras de arte originais de escultura ou de estatuária' }
    ],
  },
  {
    chapter: '98',
    title: 'Operações especiais',
    ncms: [
        { code: '9801.00.10', description: 'Artigos para uso em eventos culturais, exposições ou feiras' }
    ],
  },
  {
    chapter: '99',
    title: 'Capítulo 99',
    ncms: [
        { code: '9901.00.00', description: 'Mercadorias não especificadas ou não incluídas nas outras posições' }
    ],
  },
];

    