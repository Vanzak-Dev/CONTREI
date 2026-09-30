import Image from 'next/image';
import '../assets/section-banner.css';
import Slider from '../snippets/slider';
import pessoas from '../assets/banner-pessoas.png';
import textura from '../assets/banner-textura.jpg';

// cada filho do <Slider> é um slide; com mais de um aparecem as setas e os dots
export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__texture">
        <Image src={textura} alt="" sizes="min(159.3vw, 3058px)" />
      </div>
      <Slider className="banner__slider">
        <div key="esocial" className="banner__slide">
          <div className="banner__photo">
            <Image
              src={pessoas}
              alt="Mulher e homem em roupa social, de braços cruzados"
              sizes="(min-width: 1024px) min(58.8vw, 1129px), 656px"
            />
          </div>
          <span className="banner__fade" />
          {/* quebras manuais do Figma: .br-desktop só no desktop, .br-mobile só no mobile */}
          <h2 className="banner__title">
            Transforme <br className="br-desktop" />
            a burocracia do eSocial em inteligência corporativa.
          </h2>
          <div className="banner__stats">
            <div className="banner__stat banner__stat--1">
              <span className="banner__value">0%</span>
              <p className="banner__text">
                de Planilhas Soltas,
                <br /> Indicadores de SST
                <br className="br-desktop" /> e RH
                <br className="br-mobile" /> integrados
                <br className="br-desktop" /> em um clique.
              </p>
            </div>
            <div className="banner__stat banner__stat--2">
              <span className="banner__value">100%</span>
              <p className="banner__text">
                de Automação no
                <br className="br-desktop" /> envio
                <br className="br-mobile" /> de eventos
                <br className="br-desktop" /> obrigatórios
                <br /> (CAT e exames).
              </p>
            </div>
            <div className="banner__stat banner__stat--3">
              <span className="banner__value">Zere</span>
              <p className="banner__text">
                os riscos fiscais e
                <br /> proteja sua folha
                <br /> de pagamento.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
