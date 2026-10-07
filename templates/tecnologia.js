import Hero from '../sections/hero';
import FeatureCards from '../sections/feature-cards';
import ServicesStats from '../sections/services-stats';
import Faq from '../sections/faq';
import Differentials from '../sections/differentials';
import Clients from '../sections/clients';
import Contact from '../sections/contact';
import medica from '../assets/hero-tecnologia.webp';

export const metadata = { title: 'Tecnologia | Contrei' };

const blocks = [
  {
    title: 'Plataforma BI Contrei',
    text: 'Painel de Business Intelligence centralizado[d] e online com dados consolidados de saúde[d] e segurança: exames realizados, laudos[d] vigentes, prazos de envio de eventos e[d] status de credenciamento em uma única[d] interface.',
  },
  {
    title: 'Indicadores de SST',
    text: 'Métricas e relatórios gerenciais[d] estruturados sobre conformidade legal,[d] sinistralidade, taxas de gravidade e[d] frequência de acidentes, prontos para[d] auditorias corporativas e comitês de[d] diretoria.',
  },
  {
    title: 'Dashboard de Saúde do Colaborador',
    text: 'Visão individualizada e consolidada do[d] prontuário ocupacional de cada[d] profissional da empresa, reunindo histórico[d] de exames periódicos, aptidões, restrições[d] e laudos associados com segurança LGPD.',
  },
];

// as respostas dos itens 2 a 4 não estão no Figma (só o 1º vem aberto): preencher `answer` quando houver o texto
const faq = [
  {
    question: 'Minha equipe precisa inserir dados manualmente na[d] plataforma?',
    answer:
      'Não. A Contrei realiza o processamento e abastece as informações diretamente[d] dos laudos, clínicas e eventos emitidos. O RH acessa o painel já preenchido com[d] dados validados.',
  },
  { question: 'É possível exportar relatórios customizados para diretorias[d] e auditorias?' },
  { question: 'Como a plataforma atende às exigências da LGPD?' },
  { question: 'Como funcionam os alertas de vencimento de laudos[d] e exames?' },
];

export default function Tecnologia() {
  return (
    <>
      <Hero
        variant="tecnologia"
        image={medica}
        alt="Médica analisando dados clínicos em monitores e notebooks"
        sizes="(min-width: 1024px) min(63.5vw, 1220px), 380px"
        title={
          <>
            Visibilidade total <br className="br-desktop" />
            de SST e saúde <br className="br-desktop" />
            corporativa <br className="br-desktop" />
            sem planilhas <br className="br-desktop" />
            manuais
          </>
        }
        text={
          <>
            Plataforma de Business Intelligence <br className="br-desktop" />
            com atualização em tempo real. Elimine <br className="br-desktop" />
            tarefas repetitivas de digitação, acompanhe <br className="br-desktop" />
            indicadores em dashboards claros e <br className="br-desktop" />
            tome decisões estratégicas com dados confiáveis.
          </>
        }
        cta={{ href: '/nossos-servicos', label: 'Conhecer os Serviços' }}
      />
      <FeatureCards
        eyebrow="Automatize rotinas de monitoramento e tenha uma visão analítica completa da sua organização."
        title="Tecnologia aplicada à gestão de segurança e saúde ocupacional"
        blocks={blocks}
      />
      <ServicesStats />
      <Faq
        eyebrow="Dúvidas Frequentes"
        title="Tudo sobre nossa[d] Plataforma & Dados"
        text="Veja como nossa tecnologia se integra[d] ao dia a dia da sua equipe de recursos[d] humanos e segurança do trabalho."
        items={faq}
      />
      <Differentials />
      <Clients />
      <Contact />
    </>
  );
}
