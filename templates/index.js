import Hero from '../sections/hero';
import medica from '../assets/hero-medica.webp';
import About from '../sections/about';
import Clients from '../sections/clients';
import Banner from '../sections/banner';
import Steps from '../sections/steps';
import Stats from '../sections/stats';
import Benefits from '../sections/benefits';
import Differentials from '../sections/differentials';
import Seals from '../sections/seals';
import Coverage from '../sections/coverage';
import Contact from '../sections/contact';

export default function Index() {
  return (
    <>
      <Hero
        image={medica}
        alt="Médica examinando um paciente com estetoscópio"
        sizes="(min-width: 1024px) min(52.3vw, 1004px), 506px"
        title="Pioneirismo na Medicina e Segurança do Trabalho"
        text="Tecnologia e atendimento exclusivo para a gestão completa de Saúde, Ergonomia e Segurança do Trabalho."
        cta={{ href: '#proposta', label: 'Solicitar Proposta' }}
      />
      <About />
      <Clients />
      <Banner />
      <Steps />
      <Stats />
      <Benefits />
      <Differentials />
      <Seals />
      <Coverage />
      <Contact />
    </>
  );
}
