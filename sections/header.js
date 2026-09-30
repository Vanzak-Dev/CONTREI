import Image from 'next/image';
import Link from 'next/link';
import '../assets/section-header.css';
import logo from '../assets/logo.png';
import iconMenu from '../assets/icon-menu.svg';

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <Image src={logo} alt="Contrei" sizes="233px" loading="eager" />
      </Link>
      <button type="button" className="header__menu" popoverTarget="menu" aria-label="Abrir menu">
        <img src={iconMenu.src} alt="" />
      </button>
      <nav id="menu" popover="auto" className="header__nav">
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
        <a href="#unidades">Unidades</a>
        <a href="#proposta" className="header__cta">Solicitar Proposta</a>
      </nav>
    </header>
  );
}
