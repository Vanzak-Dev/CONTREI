import '../assets/base.css';
import Header from '../sections/header';
import Footer from '../sections/footer';

export const metadata = { title: 'Contrei' };

export default function Theme({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
