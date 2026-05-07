import { useState } from 'react';
import Icon from '@/components/ui/icon';
import LeadModal from '@/components/LeadModal';

const BLUEPRINT_IMG = 'https://cdn.poehali.dev/projects/5c4413ec-a7be-4ca6-9ea9-a0c5fdd7e304/files/8535c68e-571e-4324-8d11-cb1723e572db.jpg';

const nodes = [
  { icon: 'Flame', label: 'Отопление', angle: 0 },
  { icon: 'Wind', label: 'Вентиляция', angle: 60 },
  { icon: 'Droplets', label: 'Водоснабжение', angle: 120 },
  { icon: 'Cpu', label: 'Умный дом', angle: 180 },
  { icon: 'Thermometer', label: 'Тёплые полы', angle: 240 },
  { icon: 'FileText', label: 'Проектирование', angle: 300 },
];

const values = [
  { icon: 'Layers', title: 'Интеграция', desc: 'Все системы работают как единый организм — никаких конфликтов и переделок' },
  { icon: 'Users', title: 'Одна точка контакта', desc: 'Клиент общается с одним подрядчиком, а не с десятью разными компаниями' },
  { icon: 'TrendingUp', title: 'Эффективность', desc: 'Единый проект даёт экономию 15–25% по сравнению с разрозненным монтажом' },
  { icon: 'ShieldCheck', title: 'Ответственность', desc: 'Одна компания отвечает за весь результат — нет споров "кто виноват"' },
];

export default function Ecosystem() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen bg-coal text-white pt-20">
      {/* Header */}
      <section className="py-24 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-30" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${BLUEPRINT_IMG})` }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="section-label mb-6 flex items-center justify-center gap-4">
            <div className="pipe-h flex-1 max-w-16" />
            Экосистема SmartCom
            <div className="pipe-h flex-1 max-w-16" />
          </div>
          <h1 className="font-oswald text-6xl lg:text-8xl uppercase text-white mb-6">
            Все системы —<br /><span className="text-gold-gradient">одна команда</span>
          </h1>
          <p className="font-ibm text-chrome text-xl max-w-3xl mx-auto leading-relaxed">
            SmartCom — это не просто подрядчик. Это экосистема, где инженерные специалисты,
            архитекторы, дизайнеры и строители работают вместе ради идеального результата.
          </p>
        </div>
      </section>

      {/* Visual ecosystem diagram */}
      <section className="py-24 bg-coal relative overflow-hidden">
        <div className="eng-grid-fine absolute inset-0 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Diagram */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-gold bg-steel flex flex-col items-center justify-center z-10">
                  <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-gold" />
                  <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-gold" />
                  <span className="font-oswald text-xs text-gold text-center leading-tight uppercase">Smart<br />Com</span>
                </div>
                {/* Connecting circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 lg:w-72 lg:h-72 rounded-full border border-gold/20" />
                {/* Nodes */}
                {nodes.map((node, i) => {
                  const rad = (node.angle - 90) * (Math.PI / 180);
                  const r = 130;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <div
                      key={i}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                      }}
                    >
                      <div className="w-14 h-14 border border-steel-light group-hover:border-gold bg-steel flex flex-col items-center justify-center transition-all duration-300 cursor-default">
                        <Icon name={node.icon} size={16} className="text-gold mb-0.5" />
                        <span className="font-mono text-gold/50 text-[8px] text-center leading-tight">{node.label.split(' ')[0]}</span>
                      </div>
                      {/* Line to center */}
                      <div
                        className="absolute top-7 left-7 bg-gold/20 origin-left"
                        style={{
                          width: `${r - 28}px`,
                          height: '1px',
                          transform: `rotate(${node.angle + 180}deg)`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <div className="section-label mb-4">— Наша философия</div>
              <h2 className="font-oswald text-4xl lg:text-5xl uppercase text-white mb-6">
                Комплексный подход<br /><span className="text-gold-gradient">— это выгодно</span>
              </h2>
              <div className="space-y-6">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4 group">
                    <div className="w-10 h-10 border border-gold/30 group-hover:border-gold flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon name={v.icon} size={16} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-oswald text-lg text-white uppercase mb-1">{v.title}</h3>
                      <p className="font-ibm text-chrome text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-5xl uppercase text-white mb-6">
            Присоединяйтесь<br /><span className="text-gold-gradient">к экосистеме</span>
          </h2>
          <p className="font-ibm text-chrome mb-8">Для клиентов и партнёров — оставьте заявку, мы расскажем о возможностях</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setModal(true)} className="btn-gold px-10 py-4 text-base rounded-sm inline-flex items-center gap-2">
              <Icon name="Calculator" size={18} />
              Обсудить проект
            </button>
            <a href="/partners" className="btn-ghost-gold px-10 py-4 text-base rounded-sm inline-flex items-center gap-2">
              <Icon name="Handshake" size={18} />
              Стать партнёром
            </a>
          </div>
        </div>
      </section>

      <LeadModal open={modal} onClose={() => setModal(false)} type="client" />
    </div>
  );
}
