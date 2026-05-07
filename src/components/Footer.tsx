import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-coal border-t border-steel-mid relative overflow-hidden">
      <div className="eng-grid absolute inset-0 opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 flex items-center justify-center border border-gold/60">
                <span className="font-oswald font-700 text-gold text-lg">S</span>
                <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-gold" />
                <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-gold" />
              </div>
              <div>
                <div className="font-oswald font-600 text-white text-lg tracking-wider uppercase">SmartCom</div>
                <div className="font-mono text-gold text-[9px] tracking-[0.2em] uppercase opacity-70">Engineering</div>
              </div>
            </div>
            <p className="text-chrome text-sm leading-relaxed font-ibm mb-6">
              Проектирование и монтаж инженерных систем под ключ в Крыму. 9 лет опыта. Гарантия на все работы.
            </p>
            <div className="flex gap-3">
              {['MessageCircle', 'Phone', 'Mail'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-steel-light flex items-center justify-center text-chrome hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon name={icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="section-label mb-5">Услуги</div>
            <ul className="space-y-2.5">
              {[
                'Отопление и котельные',
                'Вентиляция и кондиционирование',
                'Водоснабжение и канализация',
                'Тёплые полы',
                'Умный дом',
                'Проектирование',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-chrome hover:text-gold transition-colors duration-300 text-sm font-ibm flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/50 rounded-full flex-shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div className="section-label mb-5">Навигация</div>
            <ul className="space-y-2.5">
              {[
                { label: 'Главная', href: '/' },
                { label: 'Экосистема', href: '/ecosystem' },
                { label: 'Партнёры', href: '/partners' },
                { label: 'Портфолио', href: '/portfolio' },
                { label: 'Контакты', href: '/contacts' },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-chrome hover:text-gold transition-colors duration-300 text-sm font-ibm flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/50 rounded-full flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="section-label mb-5">Контакты</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-chrome text-sm font-ibm">г. Симферополь, Крым</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" size={15} className="text-gold flex-shrink-0" />
                <a href="tel:+79781234567" className="text-chrome hover:text-gold transition-colors text-sm font-ibm">
                  +7 (978) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" size={15} className="text-gold flex-shrink-0" />
                <a href="mailto:info@smartcom.ru" className="text-chrome hover:text-gold transition-colors text-sm font-ibm">
                  info@smartcom.ru
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Clock" size={15} className="text-gold flex-shrink-0" />
                <span className="text-chrome text-sm font-ibm">Пн–Пт: 9:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pipe-h mt-12 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-chrome/50 text-xs font-mono">
            © 2025 SmartCom. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-chrome/50 hover:text-gold text-xs font-ibm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-chrome/50 hover:text-gold text-xs font-ibm transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
