import Hero from '../sections/hero';
import ServicesStats from '../sections/services-stats';
import Categories from '../sections/categories';
import Differentials from '../sections/differentials';
import Clients from '../sections/clients';
import About from '../sections/about';
import Contact from '../sections/contact';
import equipe from '../assets/services-equipe.webp';

export const metadata = { title: 'Nossos Serviços | Contrei' };

export default function NossosServicos() {
  return (
    <>
      <Hero
        variant="servicos"
        image={equipe}
        alt="Engenheira de segurança, médico e profissional de RH sorrindo"
        sizes="(min-width: 1024px) min(54.9vw, 1053px), 420px"
        title="Tudo o que sua empresa precisa em SST"
        text={
          <>
            Centralize suas obrigações <br className="br-desktop" />
            legais, exames clínicos, <br className="br-desktop" />
            auditorias e relatórios em <br className="br-desktop" />
            uma plataforma inteligente <br className="br-desktop" />
            com atendimento em mais de <br className="br-desktop" />
            2.500 clínicas em todo o Brasil.
          </>
        }
        cta={{ href: '#proposta', label: 'Quero me Cadastrar' }}
      />
      <ServicesStats />
      <Categories />
      <Differentials />
      <Clients />
      <About />
      <Contact />
    </>
  );
}
