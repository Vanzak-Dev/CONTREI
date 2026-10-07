import Image from 'next/image';
import '../assets/section-benefits.css';
import Slider from '../snippets/slider';
import lines from '../snippets/lines';
import mulher from '../assets/benefits-mulher.webp';
import iconObrigacoes from '../assets/benefits-icon-obrigacoes.svg';
import iconClinicas from '../assets/benefits-icon-clinicas.svg';
import iconBi from '../assets/benefits-icon-bi.svg';
import iconFaturamento from '../assets/benefits-icon-faturamento.svg';

const cards = [
  ['obrigacoes', iconObrigacoes, 'Obrigações legais e[d] NRs[m] monitoradas[d] continuamente[m] sem[d] correria de última hora.'],
  ['clinicas', iconClinicas, 'Fim do tempo[d] desperdiçado[m] ligando[d] para clínicas e[dm] alimentando planilhas[dm] manuais.'],
  ['bi', iconBi, 'Plataforma BI com[d] relatórios[m] gerenciais[d] consolidados[m] prontos[d] para a diretoria.'],
  ['faturamento', iconFaturamento, 'Faturamento único e[dm] centralizado para todas[d] as[m] suas filiais pelo país.'],
];

// cada filho do <Slider> é um banner; com mais de um aparecem as setas e os dots
export default function Benefits() {
  return (
    <section className="benefits">
      <Slider className="benefits__slider">
        <div key="rh-juridico" className="benefits__slide">
          <div className="benefits__photo">
            <Image
              src={mulher}
              alt="Mulher trabalhando no notebook em um escritório"
              sizes="(min-width: 1024px) min(64.9vw, 1246px), 755px"
            />
          </div>
          <span className="benefits__fade" />
          <span className="benefits__top" />
          <div className="benefits__heading">
            <p className="benefits__eyebrow">Para o seu RH &amp; Jurídico</p>
            <h2 className="benefits__title">{lines('Menos burocracia,[dm] mais foco estratégico.')}</h2>
          </div>
          <ul className="benefits__cards">
            {cards.map(([key, icon, text]) => (
              <li key={key} className="benefits__card">
                <span className="benefits__icon">
                  <img src={icon.src} alt="" className={`benefits__icon-img benefits__icon-img--${key}`} />
                </span>
                <p className="benefits__text">{lines(text)}</p>
              </li>
            ))}
          </ul>
        </div>
      </Slider>
    </section>
  );
}
