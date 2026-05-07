import { useState } from 'react';
import Icon from '@/components/ui/icon';
import LeadModal from '@/components/LeadModal';

const services = [
  {
    id: 'otoplenie', icon: 'Flame', num: '01',
    title: 'Отопление и котельные',
    desc: 'Проектируем и монтируем системы отопления любой сложности: от небольшого загородного дома до крупного коммерческого объекта. Работаем с котлами на газу, дизеле, твёрдом топливе и тепловыми насосами.',
    points: ['Котельные под ключ', 'Настенные и напольные котлы', 'Тепловые насосы', 'Радиаторное отопление', 'Гребёнки и коллекторы', 'Сервис и обслуживание'],
  },
  {
    id: 'ventilyacia', icon: 'Wind', num: '02',
    title: 'Вентиляция и кондиционирование',
    desc: 'Проектируем и монтируем системы вентиляции и кондиционирования: приточно-вытяжные установки, рекуперация тепла, климат-контроль. Создаём идеальный микроклимат в любом помещении.',
    points: ['Приточно-вытяжные системы', 'Рекуперация тепла', 'Сплит-системы и VRF', 'Центральное кондиционирование', 'Воздуховоды и распределение', 'Чистые помещения'],
  },
  {
    id: 'voda', icon: 'Droplets', num: '03',
    title: 'Водоснабжение и канализация',
    desc: 'Полный комплекс работ по водоснабжению и водоотведению: от скважины до точек потребления. Системы очистки воды, автономная канализация, ливневые системы.',
    points: ['Внутренние сети водопровода', 'Скважины и насосные станции', 'Очистка воды', 'Канализация и септики', 'Ливневые системы', 'Системы полива'],
  },
  {
    id: 'teplye-poly', icon: 'Thermometer', num: '04',
    title: 'Тёплые полы',
    desc: 'Монтаж водяных и электрических систем тёплого пола под любое напольное покрытие. Индивидуальный расчёт мощности и контуров для каждой комнаты.',
    points: ['Водяной тёплый пол', 'Электрический тёплый пол', 'Терморегуляторы и автоматика', 'Под плитку, паркет, ламинат', 'Реконструкция без демонтажа стяжки', 'Расчёт и проектирование'],
  },
  {
    id: 'umny-dom', icon: 'Cpu', num: '05',
    title: 'Умный дом',
    desc: 'Интегрируем все инженерные системы в единую умную экосистему. Управление со смартфона, голосовые команды, сценарии автоматизации, удалённый мониторинг.',
    points: ['Единое управление через приложение', 'Интеграция всех систем', 'Сценарии автоматизации', 'Голосовое управление', 'Безопасность и видеонаблюдение', 'Удалённый мониторинг'],
  },
  {
    id: 'proektirovanie', icon: 'FileText', num: '06',
    title: 'Проектирование',
    desc: 'Разрабатываем полный пакет рабочей документации по всем разделам инженерных систем. Согласование в надзорных органах, авторский надзор, технический надзор.',
    points: ['Рабочая документация', 'Технические условия', 'Согласование в надзоре', 'Авторский надзор', 'BIM-проектирование', 'Экспертиза проектов'],
  },
];

export default function Services() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen bg-coal text-white pt-20">
      {/* Header */}
      <section className="py-20 bg-steel relative overflow-hidden">
        <div className="eng-grid absolute inset-0 opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="section-label mb-4">— Что мы делаем</div>
          <h1 className="font-oswald text-6xl lg:text-8xl uppercase text-white">
            Наши <span className="text-gold-gradient">услуги</span>
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-coal">
        <div className="max-w-7xl mx-auto px-6 space-y-1">
          {services.map((s, i) => (
            <div key={s.id} className="border border-steel-mid bg-steel group">
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/12 flex items-start">
                    <div className="w-14 h-14 border border-gold/30 group-hover:border-gold flex items-center justify-center transition-colors duration-300">
                      <Icon name={s.icon} size={22} className="text-gold" />
                    </div>
                  </div>
                  <div className="lg:w-5/12">
                    <div className="font-mono text-gold/40 text-xs mb-2">{s.num}</div>
                    <h2 className="font-oswald text-3xl text-white uppercase mb-4 group-hover:text-gold transition-colors duration-300">
                      {s.title}
                    </h2>
                    <p className="font-ibm text-chrome text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="lg:w-5/12">
                    <div className="grid grid-cols-2 gap-2">
                      {s.points.map((p) => (
                        <div key={p} className="flex items-center gap-2 text-chrome text-sm font-ibm">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                          {p}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setModal(true)}
                      className="btn-ghost-gold mt-6 px-6 py-2.5 text-sm rounded-sm inline-flex items-center gap-2"
                    >
                      Получить расчёт
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LeadModal open={modal} onClose={() => setModal(false)} type="client" />
    </div>
  );
}
