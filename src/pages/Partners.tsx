import { useState } from 'react';
import Icon from '@/components/ui/icon';
import LeadModal from '@/components/LeadModal';

const benefits = [
  { icon: 'TrendingUp', title: 'Дополнительный доход', desc: 'Получайте комиссию с каждого реализованного проекта вашего клиента' },
  { icon: 'Users', title: 'Ваши клиенты в надёжных руках', desc: 'Мы решаем инженерные задачи — вы занимаетесь своей работой' },
  { icon: 'Award', title: 'Репутация и имидж', desc: 'Предлагайте клиентам комплексный продукт высокого класса' },
  { icon: 'FileText', title: 'Совместное проектирование', desc: 'Мы участвуем в разработке проекта с самого начала, учитывая ваши концепции' },
  { icon: 'Clock', title: 'Оперативность', desc: 'Быстрое согласование, прозрачный статус каждого объекта' },
  { icon: 'ShieldCheck', title: 'Гарантия качества', desc: '3 года гарантии на все работы. Ваша репутация в безопасности' },
];

const partnerTypes = [
  { icon: 'PenTool', title: 'Архитекторы', desc: 'Мы интегрируемся в ваш рабочий процесс: рассматриваем проект на этапе концепции, разрабатываем инженерные разделы параллельно с архитектурными.' },
  { icon: 'Palette', title: 'Дизайнеры интерьера', desc: 'Скрытая прокладка всех коммуникаций, аккуратные решения для чистовой отделки. Мы следуем вашей концепции.' },
  { icon: 'Building2', title: 'Застройщики и ГП', desc: 'Готовы к работе на крупных объектах: жилые комплексы, коттеджные посёлки, коммерческая недвижимость.' },
  { icon: 'Key', title: 'Риелторы', desc: 'Оснащайте объекты умными инженерными системами — повышайте стоимость и привлекательность объектов для покупателей.' },
];

const steps = [
  { num: '01', title: 'Подаёте заявку', desc: 'Заполняете форму — мы перезваниваем в течение дня' },
  { num: '02', title: 'Подписываем договор', desc: 'Фиксируем условия партнёрства и порядок вознаграждения' },
  { num: '03', title: 'Передаёте клиента', desc: 'Знакомите нас с клиентом или передаёте контакт' },
  { num: '04', title: 'Получаете вознаграждение', desc: 'Перечисляем комиссию после оплаты клиентом' },
];

export default function Partners() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen bg-coal text-white pt-20">
      {/* Header */}
      <section className="py-20 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">— Партнёрская программа</div>
          <h1 className="font-oswald text-6xl lg:text-8xl uppercase text-white">
            Экосистема<br /><span className="text-gold-gradient">SmartCom</span>
          </h1>
          <p className="font-ibm text-chrome text-xl mt-6 max-w-2xl leading-relaxed">
            Присоединяйтесь к сети профессионалов. Вместе мы создаём лучшие инженерные решения для клиентов Крыма.
          </p>
        </div>
      </section>

      {/* Partner types */}
      <section className="py-20 bg-coal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">— Для кого</div>
          <h2 className="font-oswald text-5xl uppercase text-white mb-12">
            Кто становится <span className="text-gold-gradient">партнёром</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerTypes.map((p) => (
              <div key={p.title} className="border border-steel-mid bg-steel p-8 card-hover group flex gap-6">
                <div className="w-14 h-14 border border-gold/30 group-hover:border-gold flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Icon name={p.icon} size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-oswald text-xl text-white uppercase mb-3 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                  <p className="font-ibm text-chrome text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-steel relative">
        <div className="eng-grid absolute inset-0 opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">— Преимущества</div>
          <h2 className="font-oswald text-5xl uppercase text-white mb-12">
            Что вы <span className="text-gold-gradient">получаете</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="border border-steel-light bg-coal p-6 card-hover group">
                <div className="w-10 h-10 border border-gold/30 group-hover:border-gold flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon name={b.icon} size={18} className="text-gold" />
                </div>
                <h3 className="font-oswald text-lg text-white uppercase mb-2 group-hover:text-gold transition-colors duration-300">{b.title}</h3>
                <p className="font-ibm text-chrome text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-coal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">— Как начать</div>
          <h2 className="font-oswald text-5xl uppercase text-white mb-12">
            4 шага до <span className="text-gold-gradient">сотрудничества</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="group">
                <div className="w-16 h-16 border border-steel-light group-hover:border-gold bg-steel flex items-center justify-center mb-5 transition-all duration-300">
                  <span className="font-oswald text-2xl text-white group-hover:text-gold transition-colors duration-300">{step.num}</span>
                </div>
                <h3 className="font-oswald text-lg text-white uppercase mb-2">{step.title}</h3>
                <p className="font-ibm text-chrome text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-5xl lg:text-6xl uppercase text-white mb-6">
            Стать частью<br /><span className="text-gold-gradient">экосистемы</span>
          </h2>
          <p className="font-ibm text-chrome mb-8 leading-relaxed">
            Оставьте заявку — менеджер свяжется с вами в течение дня, расскажет об условиях и ответит на все вопросы
          </p>
          <button
            onClick={() => setModal(true)}
            className="btn-gold px-12 py-4 text-base rounded-sm inline-flex items-center gap-2"
          >
            <Icon name="Handshake" size={18} />
            Подать заявку на партнёрство
          </button>
        </div>
      </section>

      <LeadModal open={modal} onClose={() => setModal(false)} type="partner" />
    </div>
  );
}
