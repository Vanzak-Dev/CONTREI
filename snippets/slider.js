'use client';

import { Children, useRef, useState } from 'react';
import Dots from './dots';

// slider com rolagem nativa (arrasta no touch); setas e dots só aparecem com mais de um slide
export default function Slider({ className = '', children }) {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const slides = Children.toArray(children);
  const count = slides.length;

  const go = (i) => {
    const el = track.current;
    el.scrollTo({ left: ((i + count) % count) * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className={`slider ${className}`}>
      <div
        ref={track}
        className="slider__track"
        onScroll={(e) => setActive(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
      >
        {slides.map((slide) => (
          <div key={slide.key} className="slider__slide">
            {slide}
          </div>
        ))}
      </div>
      {count > 1 && (
        <>
          <button type="button" className="slider__arrow slider__arrow--prev" aria-label="Slide anterior" onClick={() => go(active - 1)}>
            <span className="slider__chevron" />
          </button>
          <button type="button" className="slider__arrow slider__arrow--next" aria-label="Próximo slide" onClick={() => go(active + 1)}>
            <span className="slider__chevron" />
          </button>
          <div className="slider__dots">
            <Dots count={count} active={active} onSelect={go} />
          </div>
        </>
      )}
    </div>
  );
}
