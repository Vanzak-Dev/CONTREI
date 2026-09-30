// indicador de slides: <Dots count={6} active={atual} onSelect={setAtual} />
export default function Dots({ count, active, onSelect }) {
  return (
    <div className="dots">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className="dots__dot"
          aria-label={`Ir para o slide ${i + 1}`}
          aria-current={i === active}
          onClick={() => onSelect?.(i)}
        />
      ))}
    </div>
  );
}
