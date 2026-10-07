import '../assets/section-stats.css';
import Slider from '../snippets/slider';
import iconAreas from '../assets/services-icon-areas.svg';
import iconSolucoes from '../assets/services-icon-solucoes.svg';
import iconPilares from '../assets/services-icon-pilares.svg';

// as quebras de linha do Figma (br-desktop) só valem com o layout em 1:1; abaixo disso o texto quebra sozinho
const stats = [
  [
    'areas',
    iconAreas,
    '4 Áreas',
    'de Atuação',
    <>
      Gestão documental, <br className="br-desktop" />
      saúde ocupacional, <br className="br-desktop" />
      tecnologia e consultoria.
    </>,
  ],
  [
    'solucoes',
    iconSolucoes,
    '+20',
    'Soluções',
    <>
      Entre exames, programas, <br className="br-desktop" />
      documentos, perícias, <br className="br-desktop" />
      tecnologia e atendimento.
    </>,
  ],
  [
    'pilares',
    iconPilares,
    '3 Pilares',
    'de Tecnologia',
    <>
      Plataforma BI, Indicadores de SST <br className="br-desktop" />e Dashboard de perfil de saúde.
    </>,
  ],
];

// mesmo bloco do <Stats> (Figma 504:3453): 3 colunas no desktop; no mobile o <Slider> vira carrossel com dots
export default function ServicesStats() {
  return (
    <section className="stats stats--servicos">
      <div className="stats__heading">
        <p className="stats__eyebrow">Nossos serviços tem impacto comprovado</p>
        <h2 className="stats__title">Especialistas e soluções em todas as frentes da SST</h2>
      </div>
      <Slider className="stats__slider">
        {stats.map(([key, icon, value, label, desc]) => (
          <div key={key} className="stats__item">
            <span className="stats__icon">
              <img src={icon.src} alt="" className="stats__icon-img" />
            </span>
            <div>
              <p className="stats__figure">
                <span className="stats__value">{value}</span>
                <span className="stats__label">{label}</span>
              </p>
              <p className="stats__desc">{desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
