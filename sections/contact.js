import Image from 'next/image';
import '../assets/section-about.css';
import lines from '../snippets/lines';
import consultor from '../assets/contact-consultor.webp';
import setaDesktop from '../assets/icon-arrow-desktop.svg';
import setaMobile from '../assets/icon-arrow-mobile.svg';

// mesma arte da seção "Sobre" (forma azul + texturas), com a foto espelhada: estilos em section-about.css (.about--contact)
export default function Contact() {
  return (
    <section id="contato" className="about about--contact">
      <div className="about__inner">
        <div className="about__media">
          <div className="about__shape">
            <span className="about__texture about__texture--1" />
            <span className="about__texture about__texture--2" />
            <span className="about__texture about__texture--3" />
          </div>
          <Image
            src={consultor}
            alt="Consultor sorrindo enquanto usa um tablet"
            sizes="(min-width: 1024px) min(67.7vw, 1299px), 700px"
            className="about__image"
          />
        </div>
        <div className="about__content">
          <div className="about__text">
            <div>
              <p className="eyebrow">Atendimento especializado para as necessidades da sua empresa.</p>
              <h2 className="title">Fale com nossos consultores</h2>
            </div>
            <p className="about__desc">
              {lines(
                'Quer saber mais sobre os planos de saúde ocupacional,[d] credenciamento de clínicas e programas ergonômicos da[d] Contrei para sua operação?',
              )}
            </p>
          </div>
          <a href="#" className="button about__cta">
            Entre em contato
            <img src={setaDesktop.src} alt="" className="button__arrow button__arrow--desktop" />
            <img src={setaMobile.src} alt="" className="button__arrow button__arrow--mobile" />
          </a>
        </div>
      </div>
    </section>
  );
}
