import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', type: 'client' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-coal text-white pt-20">
      {/* Header */}
      <section className="py-20 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">— Свяжитесь с нами</div>
          <h1 className="font-oswald text-6xl lg:text-8xl uppercase text-white">
            Конта<span className="text-gold-gradient">кты</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-coal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <div className="section-label mb-8">— Наши данные</div>
              <div className="space-y-6 mb-12">
                {[
                  { icon: 'MapPin', label: 'Адрес', value: 'г. Симферополь, ул. Инженерная, 15', sub: 'Крым, Россия' },
                  { icon: 'Phone', label: 'Телефон', value: '+7 (978) 123-45-67', link: 'tel:+79781234567' },
                  { icon: 'Mail', label: 'Email', value: 'info@smartcom.ru', link: 'mailto:info@smartcom.ru' },
                  { icon: 'Clock', label: 'Режим работы', value: 'Пн – Пт: 9:00 – 18:00', sub: 'Сб: 10:00 – 14:00' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-5 group">
                    <div className="w-12 h-12 border border-steel-light group-hover:border-gold flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon name={item.icon} size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-mono text-gold/50 text-xs mb-1">{item.label}</div>
                      {item.link ? (
                        <a href={item.link} className="font-oswald text-xl text-white hover:text-gold transition-colors duration-300 uppercase">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-oswald text-xl text-white uppercase">{item.value}</div>
                      )}
                      {item.sub && <div className="font-ibm text-chrome text-sm mt-0.5">{item.sub}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="section-label mb-4">— Мессенджеры</div>
              <div className="flex gap-3">
                {[
                  { icon: 'MessageCircle', label: 'Telegram', color: 'hover:border-blue-400' },
                  { icon: 'Phone', label: 'WhatsApp', color: 'hover:border-green-400' },
                  { icon: 'Phone', label: 'Viber', color: 'hover:border-purple-400' },
                ].map((m) => (
                  <a
                    key={m.label}
                    href="#"
                    className={`flex items-center gap-2 border border-steel-mid px-4 py-2.5 text-chrome hover:text-white ${m.color} transition-all duration-300 text-sm font-ibm`}
                  >
                    <Icon name={m.icon} size={15} className="text-gold" />
                    {m.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="border border-steel-mid bg-steel relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />
              <div className="p-8 lg:p-10">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-4">
                      <Icon name="Check" size={28} className="text-gold" />
                    </div>
                    <h3 className="font-oswald text-3xl text-white mb-2">Сообщение отправлено!</h3>
                    <p className="font-ibm text-chrome">Мы свяжемся с вами в течение 30 минут в рабочее время.</p>
                  </div>
                ) : (
                  <>
                    <div className="section-label mb-3">— Написать нам</div>
                    <h2 className="font-oswald text-3xl text-white uppercase mb-6">Оставить заявку</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        {[
                          { val: 'client', label: 'Частный клиент' },
                          { val: 'partner', label: 'Партнёр' },
                        ].map((t) => (
                          <button
                            key={t.val}
                            type="button"
                            onClick={() => setForm({ ...form, type: t.val })}
                            className={`py-2.5 text-sm font-oswald uppercase tracking-wide transition-all duration-300 rounded-sm ${
                              form.type === t.val ? 'btn-gold' : 'btn-ghost-gold'
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input-eng w-full px-4 py-3 text-sm rounded-sm"
                      />
                      <input
                        type="tel"
                        placeholder="Телефон"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="input-eng w-full px-4 py-3 text-sm rounded-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="input-eng w-full px-4 py-3 text-sm rounded-sm"
                      />
                      <textarea
                        placeholder="Расскажите о вашем объекте или вопросе..."
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="input-eng w-full px-4 py-3 text-sm rounded-sm resize-none"
                      />
                      <button type="submit" className="btn-gold w-full py-3.5 text-sm rounded-sm font-oswald uppercase tracking-wide">
                        Отправить заявку
                      </button>
                      <p className="text-chrome/40 text-xs font-ibm text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
