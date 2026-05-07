import { useState } from 'react';
import Icon from '@/components/ui/icon';
import LeadModal from '@/components/LeadModal';

const HERO_IMG = 'https://cdn.poehali.dev/projects/5c4413ec-a7be-4ca6-9ea9-a0c5fdd7e304/files/725fe77b-344c-4ec1-a2a3-4e4c64703ad5.jpg';
const INTERIOR_IMG = 'https://cdn.poehali.dev/projects/5c4413ec-a7be-4ca6-9ea9-a0c5fdd7e304/files/73a3e43d-ad7a-4ad0-bb9c-3fe78716a7bb.jpg';
const BLUEPRINT_IMG = 'https://cdn.poehali.dev/projects/5c4413ec-a7be-4ca6-9ea9-a0c5fdd7e304/files/8535c68e-571e-4324-8d11-cb1723e572db.jpg';

const services = [
  { icon: 'Flame', title: 'Отопление и котельные', desc: 'Проектирование и монтаж систем отопления, котельных любой сложности', tag: '01' },
  { icon: 'Wind', title: 'Вентиляция и кондиционирование', desc: 'Приточно-вытяжные системы, рекуперация, климат-контроль', tag: '02' },
  { icon: 'Droplets', title: 'Водоснабжение и канализация', desc: 'Внутренние сети, очистные системы, автономное водоснабжение', tag: '03' },
  { icon: 'Thermometer', title: 'Тёплые полы', desc: 'Водяные и электрические системы теплого пола под любое покрытие', tag: '04' },
  { icon: 'Cpu', title: 'Умный дом', desc: 'Автоматизация инженерных систем, управление со смартфона', tag: '05' },
  { icon: 'FileText', title: 'Проектирование', desc: 'Полный комплект рабочей документации, согласование, экспертиза', tag: '06' },
];

const advantages = [
  { icon: 'Award', value: '9 лет', label: 'на рынке Крыма' },
  { icon: 'Home', value: '500+', label: 'объектов сдано' },
  { icon: 'Users', value: '80+', label: 'партнёров в сети' },
  { icon: 'ShieldCheck', value: '3 года', label: 'гарантия на работы' },
  { icon: 'Clock', value: '30 мин', label: 'ответ инженера' },
  { icon: 'FileCheck', value: '100%', label: 'работа по проекту' },
];

const steps = [
  { num: '01', title: 'Заявка', desc: 'Оставляете заявку — мы перезваниваем в течение 30 минут' },
  { num: '02', title: 'Выезд инженера', desc: 'Бесплатный выезд на объект, замеры, оценка задачи' },
  { num: '03', title: 'Проект', desc: 'Разрабатываем рабочую документацию и смету' },
  { num: '04', title: 'Монтаж', desc: 'Выполняем работы точно в срок своими инженерами' },
  { num: '05', title: 'Сдача объекта', desc: 'Пусконаладка, проверка, передача инструкций, гарантия' },
];

const partnerTypes = [
  { type: 'Архитекторы', icon: 'PenTool', desc: 'Получайте % от каждого заказа ваших клиентов' },
  { type: 'Дизайнеры интерьера', icon: 'Palette', desc: 'Мы реализуем любые инженерные идеи по вашим концепциям' },
  { type: 'Застройщики', icon: 'Building2', desc: 'Комплексное обеспечение инженерией целых жилых комплексов' },
  { type: 'Риелторы', icon: 'Key', desc: 'Повышайте ценность объектов умными инженерными системами' },
];

const checklists = [
  { title: '10 ошибок при выборе инженерных систем', icon: 'AlertTriangle', pages: '12 стр.' },
  { title: 'Чек-лист приёмки котельной', icon: 'CheckSquare', pages: '8 стр.' },
  { title: 'Гайд: Умный дом с нуля', icon: 'Cpu', pages: '24 стр.' },
];

const faq = [
  { q: 'Вы работаете по всему Крыму?', a: 'Да, выполняем работы во всех городах и районах Крыма: Симферополь, Севастополь, Ялта, Евпатория, Феодосия и другие.' },
  { q: 'Сколько стоит выезд инженера?', a: 'Первичный выезд инженера на объект — бесплатно. Мы оцениваем задачу и готовим предварительную смету без обязательств с вашей стороны.' },
  { q: 'Какая гарантия на работы?', a: 'Гарантия на монтажные работы — 3 года. На оборудование действует гарантия производителя (обычно 1–5 лет).' },
  { q: 'Вы работаете только с частными домами?', a: 'Нет, мы работаем с частными домами, коттеджными посёлками, коммерческими объектами, гостиницами и промышленными зданиями.' },
  { q: 'Есть ли у вас рассрочка или оплата частями?', a: 'Да, мы работаем по поэтапной оплате: аванс → этапы → финальная оплата по факту сдачи.' },
];

export default function Index() {
  const [modal, setModal] = useState<{ open: boolean; type: 'client' | 'partner' | 'checklist'; title?: string; checklistName?: string }>({
    open: false, type: 'client',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openLead = (type: 'client' | 'partner' | 'checklist', title?: string, checklistName?: string) => {
    setModal({ open: true, type, title, checklistName });
  };

  return (
    <div className="min-h-screen bg-coal text-white">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/85 to-coal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent" />
        <div className="eng-grid absolute inset-0 opacity-20" />

        <div className="absolute top-24 right-8 lg:right-16 text-right hidden lg:block">
          <div className="font-mono text-gold/40 text-xs tracking-widest mb-1">N 44°57' / E 34°06'</div>
          <div className="font-mono text-gold/30 text-xs tracking-widest">КРЫМ / CRIMEA</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="max-w-3xl">
            <div className="section-label mb-6 animate-fade-up">— Инженерные системы под ключ</div>

            <h1 className="font-oswald text-5xl lg:text-7xl xl:text-8xl font-600 leading-[0.92] uppercase mb-6 animate-fade-up delay-100">
              Умные{' '}
              <span className="text-gold-gradient block">инженерные</span>
              <span className="text-white/90">системы</span>
            </h1>

            <p className="font-ibm text-chrome text-lg lg:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up delay-200">
              Проектирование и монтаж под ключ в Крыму: отопление, вентиляция, водоснабжение, котельные, умный дом
            </p>

            <div className="flex flex-wrap gap-4 mb-16 animate-fade-up delay-300">
              <button
                onClick={() => openLead('client')}
                className="btn-gold px-8 py-4 text-base rounded-sm flex items-center gap-2"
              >
                <Icon name="Calculator" size={18} />
                Рассчитать стоимость
              </button>
              <button
                onClick={() => openLead('partner')}
                className="btn-ghost-gold px-8 py-4 text-base rounded-sm flex items-center gap-2"
              >
                <Icon name="Handshake" size={18} />
                Стать партнёром
              </button>
            </div>

            <div className="flex flex-wrap gap-8 animate-fade-up delay-400">
              {advantages.slice(0, 3).map((a) => (
                <div key={a.value} className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                    <Icon name={a.icon} size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-oswald text-xl text-white">{a.value}</div>
                    <div className="font-ibm text-chrome text-xs">{a.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="font-mono text-gold/40 text-xs tracking-widest">SCROLL</div>
          <Icon name="ChevronDown" size={16} className="text-gold/40" />
        </div>
      </section>

      {/* ─── FOR WHOM ─── */}
      <section className="py-24 bg-steel relative overflow-hidden">
        <div className="eng-grid-fine absolute inset-0 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div
              className="relative overflow-hidden group cursor-pointer card-hover border border-steel-mid"
              onClick={() => openLead('client')}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${INTERIOR_IMG})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/70 to-coal/30" />
              <div className="relative p-10 min-h-[380px] flex flex-col justify-end">
                <div className="section-label mb-4">Для вас, если</div>
                <h2 className="font-oswald text-4xl text-white mb-3 uppercase">Строите или<br />ремонтируете дом</h2>
                <p className="font-ibm text-chrome text-sm mb-6 max-w-sm">
                  Частные дома, коттеджи от 35 м². Один подрядчик для всей инженерки — от проекта до сдачи.
                </p>
                <button className="btn-gold px-6 py-3 text-sm rounded-sm self-start flex items-center gap-2">
                  <Icon name="Home" size={16} />
                  Частным клиентам
                </button>
              </div>
            </div>

            <div
              className="relative overflow-hidden group cursor-pointer card-hover border border-steel-mid bg-steel"
              onClick={() => openLead('partner')}
            >
              <div className="absolute inset-0" style={{ backgroundImage: `url(${BLUEPRINT_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
              <div className="relative p-10 min-h-[380px] flex flex-col justify-end">
                <div className="absolute top-8 right-8">
                  <div className="w-16 h-16 border border-gold/30 flex items-center justify-center">
                    <Icon name="Network" size={28} className="text-gold/60" />
                  </div>
                </div>
                <div className="section-label mb-4">Для вас, если</div>
                <h2 className="font-oswald text-4xl text-white mb-3 uppercase">Работаете<br />в строительстве</h2>
                <p className="font-ibm text-chrome text-sm mb-6 max-w-sm">
                  Архитекторы, дизайнеры, риелторы, застройщики. Присоединяйтесь к экосистеме SmartCom.
                </p>
                <button className="btn-ghost-gold px-6 py-3 text-sm rounded-sm self-start flex items-center gap-2">
                  <Icon name="Handshake" size={16} />
                  Экосистема SmartCom
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 bg-coal relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="section-label mb-4">— Направления работы</div>
              <h2 className="font-oswald text-5xl lg:text-6xl uppercase text-white">
                Наши <span className="text-gold-gradient">услуги</span>
              </h2>
            </div>
            <p className="font-ibm text-chrome max-w-sm text-sm leading-relaxed">
              Полный цикл инженерного обеспечения объекта — от первого чертежа до сдачи системы под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-mid">
            {services.map((s) => (
              <div
                key={s.tag}
                className="bg-coal p-8 group cursor-pointer hover:bg-steel transition-colors duration-300 relative overflow-hidden"
              >
                <div className="eng-number absolute -top-4 -right-2 group-hover:opacity-30 transition-opacity duration-300">
                  {s.tag}
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 border border-steel-light group-hover:border-gold transition-colors duration-300 flex items-center justify-center">
                      <Icon name={s.icon} size={18} className="text-gold" />
                    </div>
                    <div className="font-mono text-gold/50 text-xs">{s.tag}</div>
                  </div>
                  <h3 className="font-oswald text-xl text-white mb-3 group-hover:text-gold transition-colors duration-300 uppercase">
                    {s.title}
                  </h3>
                  <p className="font-ibm text-chrome text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-ibm text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ECOSYSTEM ─── */}
      <section id="ecosystem" className="py-24 bg-steel relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${BLUEPRINT_IMG})` }}
        />
        <div className="eng-grid absolute inset-0 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="section-label mb-4 flex items-center justify-center gap-3">
              <div className="pipe-h flex-1 max-w-12" />
              Экосистема
              <div className="pipe-h flex-1 max-w-12" />
            </div>
            <h2 className="font-oswald text-5xl lg:text-6xl uppercase text-white mb-6">
              Одна экосистема —<br />
              <span className="text-gold-gradient">максимум возможностей</span>
            </h2>
            <p className="font-ibm text-chrome text-base leading-relaxed">
              SmartCom объединяет инженеров, архитекторов, дизайнеров и строителей в единую профессиональную сеть.
              Клиент получает слаженную команду — партнёры получают стабильный поток заказов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {partnerTypes.map((p) => (
              <div key={p.type} className="border border-steel-light bg-coal/50 p-6 card-hover text-center group">
                <div className="w-14 h-14 border border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:border-gold transition-colors duration-300">
                  <Icon name={p.icon} size={24} className="text-gold" />
                </div>
                <h3 className="font-oswald text-base text-white mb-2 uppercase">{p.type}</h3>
                <p className="font-ibm text-chrome text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => openLead('partner')}
              className="btn-gold px-10 py-4 text-base rounded-sm inline-flex items-center gap-2"
            >
              <Icon name="Network" size={18} />
              Присоединиться к экосистеме
            </button>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="py-24 bg-coal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="section-label mb-4">— Процесс</div>
            <h2 className="font-oswald text-5xl lg:text-6xl uppercase text-white">
              Как мы <span className="text-gold-gradient">работаем</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative group">
                <div className="flex flex-col items-start">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 border border-steel-light group-hover:border-gold bg-steel flex items-center justify-center transition-all duration-300">
                      <span className="font-oswald text-2xl text-white group-hover:text-gold transition-colors duration-300">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="font-oswald text-lg text-white mb-2 uppercase">{step.title}</h3>
                  <p className="font-ibm text-chrome text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section className="py-24 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12">
              <div className="section-label mb-4">— Почему выбирают нас</div>
              <h2 className="font-oswald text-5xl lg:text-6xl uppercase text-white mb-6">
                SmartCom<br /><span className="text-gold-gradient">— это</span>
              </h2>
              <p className="font-ibm text-chrome leading-relaxed mb-8">
                Мы не просто монтажники — мы инженерная компания полного цикла. Наши специалисты прошли обучение у ведущих производителей оборудования и регулярно повышают квалификацию.
              </p>
              <button
                onClick={() => openLead('client')}
                className="btn-gold px-8 py-3.5 text-sm rounded-sm inline-flex items-center gap-2"
              >
                <Icon name="Phone" size={16} />
                Получить консультацию инженера
              </button>
            </div>

            <div className="lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-4">
              {advantages.map((a) => (
                <div key={a.value} className="border border-steel-light bg-coal p-5 card-hover group">
                  <div className="w-10 h-10 border border-gold/30 group-hover:border-gold flex items-center justify-center mb-3 transition-colors duration-300">
                    <Icon name={a.icon} size={18} className="text-gold" />
                  </div>
                  <div className="font-oswald text-3xl text-white mb-1">{a.value}</div>
                  <div className="font-ibm text-chrome text-xs">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHECKLISTS ─── */}
      <section className="py-24 bg-coal relative">
        <div className="eng-grid-fine absolute inset-0 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <div className="section-label mb-4">— База знаний</div>
              <h2 className="font-oswald text-5xl lg:text-6xl uppercase text-white">
                Материалы<br /><span className="text-gold-gradient">для скачивания</span>
              </h2>
            </div>
            <p className="font-ibm text-chrome max-w-xs text-sm leading-relaxed">
              Полезные чек-листы и гайды от наших инженеров. Получайте бесплатно — оставьте контакт.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {checklists.map((cl, i) => (
              <div
                key={i}
                className="border border-steel-mid bg-steel p-8 card-hover group cursor-pointer relative overflow-hidden"
                onClick={() => openLead('checklist', `Получить: ${cl.title}`, cl.title)}
              >
                <div className="w-12 h-12 border border-gold/40 group-hover:border-gold flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon name={cl.icon} size={22} className="text-gold" />
                </div>
                <div className="font-mono text-gold/50 text-xs mb-3">{cl.pages} · PDF</div>
                <h3 className="font-oswald text-lg text-white mb-4 uppercase leading-snug group-hover:text-gold transition-colors duration-300">
                  {cl.title}
                </h3>
                <div className="flex items-center gap-2 text-gold text-sm font-ibm">
                  <Icon name="Download" size={14} />
                  <span>Скачать бесплатно</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ─── */}
      <section className="py-24 bg-steel relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <div className="section-label mb-4">— Реализованные объекты</div>
              <h2 className="font-oswald text-5xl lg:text-6xl uppercase text-white">
                Наше <span className="text-gold-gradient">портфолио</span>
              </h2>
            </div>
            <a href="/portfolio" className="btn-ghost-gold px-6 py-3 text-sm rounded-sm self-start inline-flex items-center gap-2">
              Все объекты
              <Icon name="ArrowRight" size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Коттедж 450 м² в Ялте', tag: 'Отопление + умный дом', area: '450 м²', img: HERO_IMG },
              { title: 'Частный дом в Симферополе', tag: 'Полная инженерка под ключ', area: '320 м²', img: INTERIOR_IMG },
              { title: 'Гостиница в Судаке', tag: 'Вентиляция + кондиционирование', area: '1200 м²', img: BLUEPRINT_IMG },
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer card-hover border border-steel-mid bg-coal relative overflow-hidden">
                <div
                  className="h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.img})` }}
                />
                <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-t from-coal/80 to-transparent" />
                <div className="p-6 relative">
                  <div className="font-mono text-gold/60 text-xs mb-2">{project.tag}</div>
                  <h3 className="font-oswald text-lg text-white uppercase mb-1 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-ibm text-chrome text-sm">{project.area}</span>
                    <Icon name="ArrowRight" size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-coal">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label mb-4">— Частые вопросы</div>
            <h2 className="font-oswald text-5xl lg:text-6xl uppercase text-white">FAQ</h2>
          </div>

          <div className="space-y-2">
            {faq.map((item, i) => (
              <div key={i} className="border border-steel-mid bg-steel overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-oswald text-lg text-white group-hover:text-gold transition-colors duration-300 uppercase pr-4">
                    {item.q}
                  </span>
                  <Icon
                    name={openFaq === i ? 'ChevronUp' : 'ChevronDown'}
                    size={18}
                    className="text-gold flex-shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <div className="pipe-h mb-4" />
                    <p className="font-ibm text-chrome text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-20" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})`, opacity: 0.06 }}
        />
        <div className="absolute inset-0 bg-coal/70" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="section-label mb-6 flex items-center justify-center gap-4">
            <div className="pipe-h flex-1 max-w-16" />
            Начните сейчас
            <div className="pipe-h flex-1 max-w-16" />
          </div>
          <h2 className="font-oswald text-5xl lg:text-7xl uppercase text-white mb-6">
            Готовы обсудить<br />
            <span className="text-gold-gradient">ваш проект?</span>
          </h2>
          <p className="font-ibm text-chrome text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Бесплатная консультация инженера. Выезд на объект — без обязательств. Ответ в течение 30 минут.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => openLead('client')}
              className="btn-gold px-10 py-4 text-base rounded-sm flex items-center gap-2"
            >
              <Icon name="Calculator" size={18} />
              Рассчитать стоимость
            </button>
            <a
              href="tel:+79781234567"
              className="btn-ghost-gold px-10 py-4 text-base rounded-sm flex items-center gap-2"
            >
              <Icon name="Phone" size={18} />
              +7 (978) 123-45-67
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 text-chrome/50 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={12} className="text-gold/50" />
              Крым, Симферополь
            </div>
            <div className="w-px h-4 bg-steel-light" />
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={12} className="text-gold/50" />
              Пн–Пт: 9:00–18:00
            </div>
          </div>
        </div>
      </section>

      <LeadModal
        open={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        type={modal.type}
        title={modal.title}
        checklistName={modal.checklistName}
      />
    </div>
  );
}
