import { useState } from 'react';
import Icon from '@/components/ui/icon';
import LeadModal from '@/components/LeadModal';

const HERO_IMG = 'https://cdn.poehali.dev/projects/5c4413ec-a7be-4ca6-9ea9-a0c5fdd7e304/files/725fe77b-344c-4ec1-a2a3-4e4c64703ad5.jpg';
const INTERIOR_IMG = 'https://cdn.poehali.dev/projects/5c4413ec-a7be-4ca6-9ea9-a0c5fdd7e304/files/73a3e43d-ad7a-4ad0-bb9c-3fe78716a7bb.jpg';
const BLUEPRINT_IMG = 'https://cdn.poehali.dev/projects/5c4413ec-a7be-4ca6-9ea9-a0c5fdd7e304/files/8535c68e-571e-4324-8d11-cb1723e572db.jpg';

const projects = [
  { id: 1, title: 'Коттедж в Ялте', area: '450 м²', city: 'Ялта', tags: ['Отопление', 'Умный дом'], category: 'cottage', img: HERO_IMG, systems: ['Котельная на газу', 'Тёплые полы', 'Умный дом Loxone', 'Вентиляция с рекуперацией'] },
  { id: 2, title: 'Частный дом', area: '320 м²', city: 'Симферополь', tags: ['Инженерка под ключ'], category: 'house', img: INTERIOR_IMG, systems: ['Котельная', 'Водоснабжение', 'Тёплые полы', 'Канализация'] },
  { id: 3, title: 'Гостиница "Форос"', area: '1200 м²', city: 'Судак', tags: ['Вентиляция', 'Кондиционирование'], category: 'commercial', img: BLUEPRINT_IMG, systems: ['Центральная вентиляция', 'VRF-система', 'ИТП', 'Автоматика'] },
  { id: 4, title: 'Таунхаус 12 секций', area: '2400 м²', city: 'Евпатория', tags: ['Отопление', 'Водоснабжение'], category: 'cottage', img: HERO_IMG, systems: ['Блочная котельная', 'ХВС/ГВС', 'Лифты', 'Пожаротушение'] },
  { id: 5, title: 'Вилла на набережной', area: '680 м²', city: 'Ялта', tags: ['Умный дом', 'Тёплые полы'], category: 'house', img: INTERIOR_IMG, systems: ['Умный дом KNX', 'Бассейн', 'Сауна', 'Тёплые полы'] },
  { id: 6, title: 'Торговый центр', area: '5000 м²', city: 'Симферополь', tags: ['Вентиляция', 'Кондиционирование'], category: 'commercial', img: BLUEPRINT_IMG, systems: ['Центральная вентиляция', 'Чиллеры', 'Приточные камеры', 'BMS'] },
];

const categories = [
  { id: 'all', label: 'Все объекты' },
  { id: 'house', label: 'Частные дома' },
  { id: 'cottage', label: 'Коттеджи' },
  { id: 'commercial', label: 'Коммерция' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState(false);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-coal text-white pt-20">
      {/* Header */}
      <section className="py-20 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="section-label mb-4">— Реализованные объекты</div>
            <h1 className="font-oswald text-6xl lg:text-8xl uppercase text-white">
              Порт<span className="text-gold-gradient">фолио</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-5 py-2 text-sm font-oswald uppercase tracking-wide transition-all duration-300 rounded-sm ${
                  filter === c.id
                    ? 'btn-gold'
                    : 'btn-ghost-gold'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-coal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div key={p.id} className="group card-hover border border-steel-mid bg-steel overflow-hidden cursor-pointer">
                <div className="relative overflow-hidden">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${p.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/80 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs bg-coal/80 text-gold border border-gold/30 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-oswald text-xl text-white uppercase group-hover:text-gold transition-colors duration-300">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1 text-chrome text-xs font-ibm">
                          <Icon name="MapPin" size={11} className="text-gold/60" />
                          {p.city}
                        </div>
                        <div className="flex items-center gap-1 text-chrome text-xs font-ibm">
                          <Icon name="Square" size={11} className="text-gold/60" />
                          {p.area}
                        </div>
                      </div>
                    </div>
                    <Icon name="ArrowRight" size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1" />
                  </div>
                  <div className="pipe-h my-3" />
                  <div className="flex flex-wrap gap-1.5">
                    {p.systems.map((s) => (
                      <span key={s} className="text-chrome/60 text-xs font-ibm">{s} ·</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-steel">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl uppercase text-white mb-4">
            Хотите такой же результат?
          </h2>
          <p className="font-ibm text-chrome mb-8">Расскажите о вашем объекте — мы подготовим предварительный расчёт бесплатно</p>
          <button onClick={() => setModal(true)} className="btn-gold px-10 py-4 rounded-sm text-base inline-flex items-center gap-2">
            <Icon name="Calculator" size={18} />
            Рассчитать стоимость
          </button>
        </div>
      </section>

      <LeadModal open={modal} onClose={() => setModal(false)} type="client" />
    </div>
  );
}
