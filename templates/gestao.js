import Hero from '../sections/hero';
import FeatureCards from '../sections/feature-cards';
import ServicesStats from '../sections/services-stats';
import Faq from '../sections/faq';
import Differentials from '../sections/differentials';
import Clients from '../sections/clients';
import Contact from '../sections/contact';
import executiva from '../assets/hero-gestao.webp';

export const metadata = { title: 'Gestão | Contrei' };

const blocks = [
  {
    title: 'eSocial',
    text: 'Sistema Digital que unifica o envio de[d] informações trabalhistas e previdenciárias[d] ao Governo Federal, incluindo os eventos[d] essenciais de SST: S-2210 (CAT), S-2220[d] (Monitoramento de Saúde) e S-2240[d] (Condições Ambientais).',
  },
  {
    title: 'PGR',
    text: 'Programa de Gerenciamento de Riscos —[d] documento obrigatório pela NR-01 que[d] materializa o Gerenciamento de Riscos[d] Ocupacionais (GRO), contemplando o[d] inventário minucioso de perigos e planos[d] de ação preventivos.',
  },
  {
    title: 'PCMSO',
    text: 'Programa de Controle Médico de Saúde[d] Ocupacional — define e programa os[d] exames médicos periódicos, clínicos e[d] complementares, focado no rastreamento e[d] na prevenção de agravos à saúde do[d] trabalhador.',
  },
  {
    title: 'LTCAT',
    text: 'Laudo Técnico das Condições Ambientais[d] do Trabalho — quantifica e atesta a[d] exposição de trabalhadores a agentes[d] nocivos, sendo a base comprobatória de[d] aposentadoria especial junto à Previdência[d] Social.',
  },
  {
    title: 'Laudos Técnicos',
    text: 'Pareceres e relatórios complementares[d] necessários para comprovação da[d] segurança ambiental, incluindo laudos[d] elétricos, de máquinas, insalubridade e[d] periculosidade exigidos por fiscalizações.',
  },
];

// as respostas dos itens 2 a 5 não estão no Figma (só o 1º vem aberto): preencher `answer` quando houver o texto
const faq = [
  {
    question: 'O que acontece se minha empresa perder um prazo do[d] eSocial?',
    answer:
      'O envio em atraso ou omissão dos eventos de SST (S-2210, S-2220 e S-2240)[d] acarreta multas automáticas pela Receita Federal e Ministério do Trabalho. A Contrei[d] controla cada janela e realiza as transmissões antecipadamente.',
  },
  { question: 'O PGR substitui completamente o antigo PPRA?' },
  { question: 'Com que frequência o PCMSO e seus exames devem ser[d] renovados?' },
  { question: 'Qual a diferença prática entre LTCAT e laudo de[d] insalubridade?' },
  { question: 'Pequenas empresas ou MEIs também precisam cumprir[d] essas rotinas?' },
];

export default function Gestao() {
  return (
    <>
      <Hero
        variant="gestao"
        image={executiva}
        alt="Executiva de blazer azul analisando relatórios em um tablet"
        sizes="(min-width: 1024px) min(81.1vw, 1557px), 380px"
        title="Gestão Documental & Conformidade Legal sem riscos"
        text={
          <>
            Suas obrigatoriedades de SST e <br className="br-desktop" />
            compliance no piloto automático com a <br className="br-desktop" />
            metodologia Contrei. Tenha documentos <br className="br-desktop" />
            e laudos sempre em dia, eliminando <br className="br-desktop" />
            riscos de multas e liberando seu <br className="br-desktop" />
            RH para focar no que é estratégico.
          </>
        }
        cta={{ href: '/nossos-servicos', label: 'Conhecer os Serviços' }}
      />
      <FeatureCards
        eyebrow="Cobrimos todas as exigências das Normas Regulamentadoras e órgãos governamentais com processos fluidos e ágeis."
        title="Serviços especializados em gestão técnica e legal"
        blocks={blocks}
      />
      <ServicesStats />
      <Faq
        eyebrow="Dúvidas Frequentes"
        title="Tudo sobre Gestão[d] Documental &[d] Conformidade"
        text="Esclarecemos os principais pontos[d] sobre obrigatoriedades legais de[d] SST para proteger sua organização[d] contra contingências trabalhistas."
        items={faq}
      />
      <Differentials />
      <Clients />
      <Contact />
    </>
  );
}
