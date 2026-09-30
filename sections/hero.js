import Image from 'next/image';
import '../assets/section-hero.css';
import medica from '../assets/hero-medica.png';
import textura from '../assets/hero-textura.jpg';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';

export default function Hero() {
  return (
    <section className="hero">
      <Image src={textura} alt="" sizes="100vw" className="hero__texture" />
      <Image src={textura} alt="" sizes="100vw" className="hero__texture hero__texture--mirror" />
      <div className="hero__inner">
        <Image
          src={medica}
          alt="Médica examinando um paciente com estetoscópio"
          sizes="(min-width: 1024px) min(52.3vw, 1004px), 506px"
          loading="eager"
          fetchPriority="high"
          className="hero__image"
        />
        <span className="hero__fade" />
        <h1 className="hero__title">Pioneirismo na Medicina e Segurança do Trabalho</h1>
        <div className="hero__content">
          <p className="hero__text">
            Tecnologia e atendimento exclusivo para a gestão completa de Saúde, Ergonomia e Segurança do Trabalho.
          </p>
          <a href="#proposta" className="button hero__cta">
            Solicitar Proposta
            <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
            <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
          </a>
        </div>
      </div>
    </section>
  );
}
