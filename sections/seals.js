import Image from 'next/image';
import '../assets/section-seals.css';
import lines from '../snippets/lines';
import iso27001 from '../assets/seals-iso27001.png';
import abresst from '../assets/seals-abresst.png';
import iso9001 from '../assets/seals-iso9001.png';

const seals = [
  ['iso27001', iso27001, 'Selo SAS Certificadora NBR ISO/IEC 27001:2022', 'Proteção[m] de Dados[d] e[m] Segurança[d] da[m] Informação'],
  ['abresst', abresst, 'Selo de Qualidade ABRESST (SQA)', 'Boas práticas[m] em[d] Saúde e[m] Segurança[dm] no Trabalho'],
  ['iso9001', iso9001, 'Selo SAS Certificadora NBR ISO 9001:2015', 'Sistema de[m] Gestão[d] da[m] Qualidade'],
];

export default function Seals() {
  return (
    <section className="seals">
      <div className="seals__heading">
        <p className="eyebrow eyebrow--lg">{lines('Qualidade reconhecida em todo o território[m] nacional')}</p>
        <h2 className="title">{lines('Compromisso rigoroso[m] com conformidade técnica.')}</h2>
      </div>
      <ul className="seals__list">
        {seals.map(([key, src, alt, text]) => (
          <li key={key} className={`seals__item seals__item--${key}`}>
            <span className="seals__img">
              <Image src={src} alt={alt} sizes="(min-width: 1024px) 187px, 108px" />
            </span>
            <p className="seals__text">{lines(text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
