import Hero from '../sections/hero';
import FeatureCards from '../sections/feature-cards';
import ServicesStats from '../sections/services-stats';
import Faq from '../sections/faq';
import Differentials from '../sections/differentials';
import Clients from '../sections/clients';
import Contact from '../sections/contact';
import atendimento from '../assets/hero-saude.webp';

export const metadata = { title: 'Saúde | Contrei' };

const blocks = [
  {
    title: 'ASO',
    text: 'Atestado de Saúde Ocupacional emitido[d] após exames admissionais, periódicos, de[d] retorno ao trabalho, mudança de risco[d] ocupacional e demissionais, assegurando a[d] aptidão plena para cada função.',
  },
  {
    title: 'Exames[d] Laboratóriais',
    text: 'Coletas e análises clínicas preventivas[d] alinhadas com o perfil de exposição e[d] riscos do cargo, realizadas perto do[d] endereço do colaborador ou em polos[d] centralizados.',
  },
  {
    title: 'Exames[d] Complementares',
    text: 'Audiometria, espirometria, ECG, EEG,[d] acuidade visual e exames toxicológicos[d] conforme exigência das Normas[d] Regulamentadoras (como NR-35 e NR-33).',
  },
  {
    title: 'Gestão Ambulatorial',
    text: 'Estruturação, escala médica e[d] operacionalização de ambulatórios[d] médicos instalados na própria sede da sua[d] empresa ou fábrica para atendimentos[d] primários.',
  },
  {
    title: 'Conservação[d] Auditiva (PCA)',
    text: 'Mapeamento de ruído ocupacional,[d] realização periódica de testes[d] audiométricos e implementação de[d] barreiras e EPIs adequados para proteção[d] da acuidade auditiva.',
  },
  {
    title: 'Proteção[d] Respiratória (PPR)',
    text: 'Protocolos rigorosos de seleção, teste de[d] vedação (Fit Test) e conservação de[d] respiradores mecânicos e químicos para[d] ambientes de alta exposição a[d] particulados.',
  },
  {
    title: 'Ergonomia do Trabalho',
    text: 'Análise Ergonômica do Trabalho (AET) e[d] avaliação ergonômica preliminar (AEP) para[d] otimizar postos de trabalho, prevenir[d] LER/DORT e elevar o rendimento da[d] equipe.',
  },
  {
    title: 'Ginástica Laboral',
    text: 'Sessões orientadas por fisioterapeutas e[d] educadores físicos no posto de trabalho ou[d] formato remoto para alongamento,[d] mobilidade e descompressão.',
  },
  {
    title: 'Gestão de[d] Absenteísmo (PGA)',
    text: 'Monitoramento e tabulação detalhada de[d] atestados, CIDs recorrentes e[d] afastamentos pelo INSS, criando[d] inteligência epidemiológica para o RH.',
  },
];

// as respostas dos itens 2 a 5 não estão no Figma (só o 1º vem aberto): preencher `answer` quando houver o texto
const faq = [
  {
    question: 'Como funciona o agendamento de exames em diferentes[d] cidades?',
    answer:
      'A Contrei conta com uma rede credenciada de mais de 2.500 clínicas em todo o Brasil.[d] Sua equipe abre o chamado via plataforma ou ticket e nós direcionamos o[d] colaborador para o local mais próximo com data e hora reservadas.',
  },
  { question: 'Qual o prazo para liberação do ASO após a consulta?' },
  { question: 'Qual a obrigatoriedade da Análise Ergonômica (AET / AEP)?' },
  { question: 'Como o Programa de Absenteísmo (PGA) reduz custos para[d] a empresa?' },
  { question: 'A ginástica laboral pode ser feita em equipes em home[d] office?' },
];

export default function Saude() {
  return (
    <>
      <Hero
        variant="saude"
        image={atendimento}
        alt="Enfermeira avaliando as costas de um paciente idoso sentado"
        // a foto é um recorte 16:9 mostrado só pela parte direita: o tamanho que conta é o da imagem inteira (1582px em 1920)
        sizes="(min-width: 1024px) min(82.4vw, 1582px), 360px"
        title={
          <>
            Cuidado clínico <br className="br-desktop" />
            preventivo e <br className="br-desktop" />
            ergonomia para <br className="br-desktop" />
            quem faz sua <br className="br-desktop" />
            empresa
          </>
        }
        text={
          <>
            Gestão completa da jornada de saúde do <br className="br-desktop" />
            colaborador com agendamento ágil de <br className="br-desktop" />
            ASO em rede nacional, ergonomia com <br className="br-desktop" />
            foco em bem-estar e controle inteligente <br className="br-desktop" />
            de absenteísmo.
          </>
        }
        cta={{ href: '/nossos-servicos', label: 'Conhecer os Serviços' }}
      />
      <FeatureCards
        eyebrow="Atendimento nacional com rede credenciada de mais de 2.500 clínicas e especialistas em ergonomia e medicina do trabalho."
        title="Soluções completas para a saúde e bem-estar do seu time"
        blocks={blocks}
      />
      <ServicesStats />
      <Faq
        eyebrow="Dúvidas Frequentes"
        title="Tudo sobre Saúde[d] Ocupacional[d] & Exames"
        text="Principais perguntas sobre a[d] realização de exames admissionais,[d] periódicos, retorno ao trabalho e[d] implementação de programas ergonômicos."
        items={faq}
      />
      <Differentials />
      <Clients />
      <Contact />
    </>
  );
}
