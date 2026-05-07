import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  type?: 'client' | 'partner' | 'checklist';
  checklistName?: string;
}

export default function LeadModal({ open, onClose, title, subtitle, type = 'client', checklistName }: LeadModalProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', comment: '' });
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const defaultTitle = type === 'partner'
    ? 'Стать партнёром'
    : type === 'checklist'
    ? `Получить: ${checklistName}`
    : 'Рассчитать стоимость';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-steel w-full max-w-md border border-steel-mid shadow-2xl animate-scale-in">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold" />

        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-chrome hover:text-gold transition-colors"
          >
            <Icon name="X" size={20} />
          </button>

          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={28} className="text-gold" />
              </div>
              <h3 className="font-oswald text-2xl text-white mb-2">Заявка принята!</h3>
              <p className="text-chrome font-ibm text-sm">
                {type === 'checklist'
                  ? 'Материал придёт на вашу почту в течение нескольких минут.'
                  : 'Наш инженер свяжется с вами в течение 30 минут в рабочее время.'}
              </p>
              <button onClick={onClose} className="btn-gold mt-6 px-8 py-2.5 text-sm rounded-sm">
                Закрыть
              </button>
            </div>
          ) : (
            <>
              <div className="section-label mb-3">{type === 'partner' ? 'Партнёрство' : type === 'checklist' ? 'Материалы' : 'Заявка'}</div>
              <h3 className="font-oswald text-2xl text-white mb-1">{title || defaultTitle}</h3>
              {subtitle && <p className="text-chrome text-sm font-ibm mb-6">{subtitle}</p>}
              {!subtitle && <p className="text-chrome text-sm font-ibm mb-6">Заполните форму — мы свяжемся с вами в течение 30 минут</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-eng w-full px-4 py-3 text-sm rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="input-eng w-full px-4 py-3 text-sm rounded-sm"
                  />
                </div>
                {(type === 'checklist' || type === 'partner') && (
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-eng w-full px-4 py-3 text-sm rounded-sm"
                    />
                  </div>
                )}
                {type === 'client' && (
                  <div>
                    <textarea
                      placeholder="Кратко опишите ваш объект..."
                      rows={3}
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="input-eng w-full px-4 py-3 text-sm rounded-sm resize-none"
                    />
                  </div>
                )}
                <button type="submit" className="btn-gold w-full py-3 text-sm rounded-sm">
                  {type === 'checklist' ? 'Получить материал' : type === 'partner' ? 'Отправить заявку' : 'Рассчитать стоимость'}
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
  );
}
