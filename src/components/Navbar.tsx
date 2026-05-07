import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Экосистема', href: '/ecosystem' },
  { label: 'Партнёры', href: '/partners' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Контакты', href: '/contacts' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-coal/95 backdrop-blur-md border-b border-steel-mid'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex items-center justify-center border border-gold/60 group-hover:border-gold transition-colors duration-300">
            <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-300" />
            <span className="font-oswald font-700 text-gold text-lg leading-none relative z-10">S</span>
            <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-gold" />
            <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-gold" />
          </div>
          <div>
            <div className="font-oswald font-600 text-white text-lg leading-none tracking-wider uppercase">SmartCom</div>
            <div className="font-mono text-gold text-[9px] tracking-[0.2em] uppercase opacity-70">Engineering</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link font-ibm text-sm tracking-wide transition-colors duration-300 ${
                location.pathname === link.href
                  ? 'text-gold active'
                  : 'text-chrome hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+79781234567"
            className="flex items-center gap-2 text-chrome hover:text-gold transition-colors duration-300 font-mono text-sm"
          >
            <Icon name="Phone" size={14} />
            <span>+7 (978) 123-45-67</span>
          </a>
          <button className="btn-gold px-5 py-2 text-sm rounded-sm">
            Рассчитать стоимость
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-chrome hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-coal/98 backdrop-blur-md border-t border-steel-mid">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-oswald text-lg tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === link.href ? 'text-gold' : 'text-chrome hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-steel-mid flex flex-col gap-3">
              <a href="tel:+79781234567" className="text-chrome font-mono text-sm flex items-center gap-2">
                <Icon name="Phone" size={14} />
                +7 (978) 123-45-67
              </a>
              <button className="btn-gold px-5 py-3 text-sm rounded-sm w-full">
                Рассчитать стоимость
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
