import '../assets/section-stats.css';
import Slider from '../snippets/slider';
import iconClinicas from '../assets/stats-icon-clinicas.svg';
import iconClientes from '../assets/stats-icon-clientes.svg';
import iconAnos from '../assets/stats-icon-anos.svg';
import iconPlataformas from '../assets/stats-icon-plataformas.svg';

const stats = [
  ['clinicas', iconClinicas, '+2.500', 'Clínicas', ['Credenciadas', 'em Todo o Brasil']],
  ['clientes', iconClientes, '+1.800', 'Clientes', ['Atendidos']],
  ['anos', iconAnos, '+45', 'Anos', ['De atuação', 'em SST']],
  ['plataformas', iconPlataformas, '+5', 'Plataformas', ['Para gestão', 'de SST']],
];

// no desktop é uma linha de 4 colunas; no mobile o <Slider> vira carrossel com dots
export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__heading">
        <p className="stats__eyebrow">
          Mais de quatro décadas estruturando a governança de SST de indústrias, logísticas, varejistas e serviços
        </p>
        <h2 className="stats__title">Excelência traduzida em resultados tangíveis.</h2>
      </div>
      <Slider className="stats__slider">
        {stats.map(([key, icon, value, label, desc]) => (
          <div key={key} className="stats__item">
            <span className="stats__icon">
              <img src={icon.src} alt="" className={`stats__icon-img stats__icon-img--${key}`} />
            </span>
            <div>
              <p className="stats__figure">
                <span className="stats__value">{value}</span>
                <span className="stats__label">{label}</span>
              </p>
              <p className="stats__desc">
                {desc.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
