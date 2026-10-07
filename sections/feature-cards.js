import '../assets/section-feature-cards.css';
import Slider from '../snippets/slider';
import lines from '../snippets/lines';
// mesmo ícone (barras) já usado nos cards de Differentials; todos os blocos do Figma usam ele
import icon from '../assets/differentials-icon-rendimento.svg';

const MAX_BLOCKS = 9;

// Figma 504:3630. Desktop: linhas de 3 blocos (1 ou 2 ficam centralizados; do 4º em diante quebra para a linha de baixo).
// Mobile: o <Slider> vira carrossel com dots. `blocks`: [{ title, text }], no máximo MAX_BLOCKS (título e texto aceitam as quebras de lines()).
export default function FeatureCards({ eyebrow, title, blocks }) {
  return (
    <section className="feature-cards">
      <div className="feature-cards__heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="title">{title}</h2>
      </div>
      <Slider className="feature-cards__slider">
        {blocks.slice(0, MAX_BLOCKS).map((block) => (
          <div key={block.title} className="feature-cards__card">
            <div className="feature-cards__card-head">
              <span className="feature-cards__icon">
                <img src={icon.src} alt="" className="feature-cards__icon-img" />
              </span>
              <h3 className="feature-cards__card-title">{lines(block.title)}</h3>
            </div>
            <p className="feature-cards__card-text">{lines(block.text)}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
