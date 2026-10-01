'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../assets/section-header.css';
import logo from '../assets/logo.png';
import iconMenu from '../assets/icon-menu.svg';

export default function Header() {
  const nav = useRef(null);
  const servicos = useRef(null);

  // o submenu fecha ao clicar fora dele ou com Esc; escolher um link também fecha o menu mobile
  useEffect(() => {
    const onClick = (e) => {
      if (servicos.current.firstChild.contains(e.target)) return; // o próprio "Serviços" abre e fecha
      servicos.current.open = false;
      if (e.target.closest('.header__nav a') && nav.current.matches(':popover-open')) nav.current.hidePopover();
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') servicos.current.open = false;
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <Image src={logo} alt="Contrei" sizes="233px" loading="eager" />
      </Link>
      <button type="button" className="header__menu" popoverTarget="menu" aria-label="Abrir menu">
        <img src={iconMenu.src} alt="" />
      </button>
      <nav ref={nav} id="menu" popover="auto" className="header__nav">
        <details ref={servicos} className="header__dropdown">
          <summary>Serviços</summary>
          <div className="header__submenu">
            <Link href="/nossos-servicos">Nossos Serviços</Link>
          </div>
        </details>
        {/* com "/" na frente as âncoras funcionam também a partir das outras páginas */}
        <a href="/#contato">Contato</a>
        <a href="/#unidades">Unidades</a>
        <a href="/#proposta" className="header__cta">Solicitar Proposta</a>
      </nav>
    </header>
  );
}
