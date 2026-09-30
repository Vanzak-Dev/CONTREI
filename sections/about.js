import Image from 'next/image';
import '../assets/section-about.css';
import medico from '../assets/about-medico.png';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__media">
          <div className="about__shape">
            <span className="about__texture about__texture--1" />
            <span className="about__texture about__texture--2" />
            <span className="about__texture about__texture--3" />
          </div>
          <Image
            src={medico}
            alt="Médico de avental hospitalar segurando um notebook"
            sizes="(min-width: 1024px) min(67.4vw, 1294px), 654px"
            className="about__image"
          />
        </div>
        <div className="about__content">
          <div className="about__text">
            {/* quebras manuais do Figma; as .br-desktop só existem no desktop */}
            <h2 className="about__title">
              Referência em Minas <br />
              Gerais há mais de 45 anos.
            </h2>
            <p className="about__desc">
              Desde 1981, a Contrei constrói uma história <br className="br-desktop" />
              pautada por resultados e grandes parcerias em <br className="br-desktop" />
              Engenharia de Segurança e Medicina do Trabalho.
              <br />
              <br />
              Otimizamos a rotina do RH da sua empresa para que <br className="br-desktop" />
              seus colaboradores atuem de forma mais estratégica, <br className="br-desktop" />
              com Indicadores de SST e Plataforma BI prontos <br className="br-desktop" />
              para decisões, sem inserção manual de dados.
            </p>
          </div>
          <a href="#" className="button about__cta">
            Saiba Mais
            <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
            <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
          </a>
        </div>
      </div>
    </section>
  );
}
