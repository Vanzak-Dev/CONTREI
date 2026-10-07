import Hero from '../sections/hero';
import engenheira from '../assets/consultoria-engenheira.webp';
import FeatureCards from '../sections/feature-cards';
import ServicesStats from '../sections/services-stats';
import Faq from '../sections/faq';
import Differentials from '../sections/differentials';
import Clients from '../sections/clients';
import Contact from '../sections/contact';

export const metadata = { title: 'Consultoria | Contrei' };

const blocks = [
  {
    title: 'Terceirização[d] de SESMT',
    text: 'Composição e gestão técnica de equipe[d] multidisciplinar (engenheiros, técnicos de[d] segurança, médicos e enfermeiros do[d] trabalho) conforme dimensionamento[d] obrigatório da NR-04.',
  },
  {
    title: 'Perícias de Insalubridade & Periculosidade',
    text: 'Métricas e relatórios gerenciais[d] estruturados sobre conformidade legal,[d] sinistralidade, taxas de gravidade e[d] frequência de acidentes, prontos para[d] auditorias corporativas e comitês de[d] diretoria.',
  },
  {
    title: 'Perícias Médicas Trabalhistas',
    text: 'Investigação médico-legal para avaliação[d] do nexo de causalidade entre a patologia[d] reclamada pelo colaborador e as atividades[d] desenvolvidas na empresa.',
  },
  {
    title: 'Treinamentos EAD & In Company',
    text: 'Formação e reciclagem em todas as NRs[d] (NR-05 CIPA, NR-06 EPIs, NR-10[d] Eletricidade, NR-33 Espaços Confinados,[d] NR-35 Trabalho em Altura, etc.), no[d] formato presencial ou digital.',
  },
  {
    title: 'Medições Ambientais',
    text: 'Quantificação rigorosa de agentes físicos[d] (ruído com dosimetria, calor com IBUTG,[d] vibração de corpo inteiro e mãos/braços) e[d] químicos (poeiras, fumos e gases) com[d] aparelhos calibrados.',
  },
  {
    title: 'Atendimento a Nível Nacional',
    text: 'Unificação da governança de SST para[d] empresas com múltiplas filiais ou[d] funcionários espalhados pelo Brasil através[d] de rede padronizada de mais de 2.500[d] clínicas.',
  },
];

// as respostas dos itens 2 a 4 não estão no Figma (só o 1º vem aberto): preencher `answer` quando houver o texto
const faq = [
  {
    question: 'Por que indicar um assistente técnico em perícias trabalhistas?',
    answer:
      'O perito judicial avalia o ambiente no dia, mas o assistente técnico da Contrei formula os quesitos estratégicos, acompanha a diligência com olhar defensivo e contesta incongruências no laudo antes do julgamento.',
  },
  { question: 'Minha empresa é obrigada a manter um SESMT interno?' },
  { question: 'Os certificados dos treinamentos em formato EAD possuem validade legal?' },
  { question: 'Como funcionam as medições de ruído, calor e agentes químicos?' },
];

export default function Consultoria() {
  return (
    <>
      <Hero
        variant="consultoria"
        image={engenheira}
        alt="Engenheira de segurança com capacete e colete refletivo analisando um tablet"
        sizes="(min-width: 1024px) min(58.1vw, 1116px), 380px"
        title="Engenharia de segurança e assistência técnica pericial em todo o Brasil"
        text={
          <>
            Suporte técnico especializado que <br className="br-desktop" />
            vai muito além da emissão de papéis. <br className="br-desktop" />
            Terceirização de SESMT, assistência <br className="br-desktop" />
            em perícias judiciais trabalhistas, <br className="br-desktop" />
            treinamentos obrigatórios e presença <br className="br-desktop" />
            nacional com mais de 2.500 clínicas.
          </>
        }
        cta={{ href: '/nossos-servicos', label: 'Conhecer os Serviços' }}
      />
      <FeatureCards
        eyebrow="Profissionais gabaritados em engenharia de segurança e medicina legal para proteger sua empresa juridicamente e operacionalmente."
        title="Consultoria técnica avançada e cobertura operacional completa"
        blocks={blocks}
      />
      <ServicesStats />
      <Faq
        eyebrow="Dúvidas Frequentes"
        title="Tudo sobre[d] Consultoria,[d] Perícias & SESMT"
        text="Saiba como funciona a indicação de[d] assistentes periciais técnicos e a gestão[d] externa de segurança do trabalho."
        items={faq}
      />
      <Differentials />
      <Clients />
      <Contact />
    </>
  );
}
