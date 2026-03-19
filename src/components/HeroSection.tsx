import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-10 space-y-3">
        <div className="text-4xl">✅</div>
        <p className="font-semibold text-gray-900">Сообщение отправлено!</p>
        <p className="text-sm text-gray-500">Надежда Николаевна свяжется с вами в ближайшее время.</p>
        <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="text-sm text-[#6B5EA8] hover:underline mt-2">Отправить ещё одно</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Ваше имя</label>
        <input
          type="text"
          required
          placeholder="Иванова Мария Петровна"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#6B5EA8] transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Электронная почта</label>
        <input
          type="email"
          required
          placeholder="example@mail.ru"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#6B5EA8] transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Сообщение</label>
        <textarea
          required
          rows={4}
          placeholder="Опишите ваш вопрос или запрос..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#6B5EA8] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#6B5EA8] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#5a4e90] transition-colors"
      >
        Отправить сообщение
      </button>
    </form>
  );
}

const images = [
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg',
];

const navItems = [
  {
    label: 'О себе',
    sub: [
      { label: 'Повышение квалификации', path: '/about/qualification' },
      { label: 'Результаты профессиональной деятельности', path: '/about/results' },
      { label: 'Публикации', path: '/about/publications' },
      { label: 'Мои достижения', path: '/about/achievements' },
    ],
  },
  {
    label: 'Документы',
    sub: [
      { label: 'Программы', path: '/documents/programs' },
      { label: 'Планы работы', path: '/documents/plans' },
      { label: 'Деятельность в МО', path: '/documents/mo' },
    ],
  },
  {
    label: 'Обучающимся',
    sub: [
      { label: 'Советы психолога', path: '/students/tips' },
      { label: 'Профориентация', path: '/students/proforientation' },
    ],
  },
  {
    label: 'Родителям',
    sub: [
      { label: 'Советы родителям', path: '/parents/tips' },
      { label: 'Родительское собрание', path: '/parents/meeting' },
    ],
  },
  {
    label: 'Педагогам',
    sub: [
      { label: 'Диагностический материал', path: '/teachers/diagnostic' },
      { label: 'Памятки', path: '/teachers/memos' },
      { label: 'Игры', path: '/teachers/games' },
    ],
  },
  {
    label: 'Интересно',
    sub: [
      { label: 'Сказкотерапия', path: '/interesting/fairytale' },
    ],
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen w-full overflow-hidden bg-white">
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex max-w-2xl flex-col gap-10">
              <div
                className={cn(
                  'transform transition-all duration-1000 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl md:h-60 md:w-60">
                  <img
                    src="/placeholder-user.jpg"
                    alt="Шевцова Надежда Николаевна"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div
                className={cn(
                  'transform transition-all duration-1000 delay-300 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="space-y-3">
                  <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                    Шевцова Надежда Николаевна
                  </p>
                  <p className="text-xl font-light text-white/80 md:text-2xl">
                    Педагог-психолог
                  </p>
                  <p className="text-sm text-white/60 max-w-md leading-relaxed">
                    Муниципальное бюджетное общеобразовательное учреждение Лысогорская средняя общеобразовательная школа<br />
                    с. Лысогорка, Куйбышевского района, Ростовской области
                  </p>
                  <p className="text-base text-white/60 max-w-md leading-relaxed">
                    Создаю безопасное пространство для роста, развития и гармонии каждого ребёнка
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* ── NAVIGATION ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex items-center overflow-x-auto">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative flex-shrink-0"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="flex items-center gap-1 px-5 py-5 text-sm font-medium text-gray-700 hover:text-[#6B5EA8] transition-colors whitespace-nowrap">
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openMenu === item.label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-lg rounded-b-lg min-w-[240px] py-2 z-50">
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block w-full text-left px-5 py-2.5 text-sm text-gray-600 hover:bg-purple-50 hover:text-[#6B5EA8] transition-colors"
                        onClick={() => setOpenMenu(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* ── ABOUT SECTION ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest text-[#6B5EA8] uppercase">О педагоге-психологе</span>
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl leading-snug">
                Надежда Николаевна<br />
                <span className="text-gray-400">Шевцова</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Педагог-психолог с многолетним опытом работы с детьми, подростками и их семьями.
                Специализируюсь на создании благоприятной психологической среды в образовательном
                учреждении, помогаю детям раскрыть свой потенциал и справиться с трудностями.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Использую современные методики: арт-терапию, сказкотерапию, игровые техники.
                Каждый ребёнок уникален — и именно к каждому ищу свой подход.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="/placeholder-user.jpg"
                  alt="Шевцова Надежда Николаевна"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#6B5EA8] text-white rounded-xl px-6 py-4 shadow-lg">
                <p className="text-sm font-light opacity-80">Специализация</p>
                <p className="font-medium">Педагогическая психология</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — info */}
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest text-[#6B5EA8] uppercase">Связь</span>
              <h2 className="text-3xl font-light text-gray-900 md:text-4xl">Напишите мне</h2>
              <p className="text-gray-600 leading-relaxed">
                Если у вас есть вопросы — заполните форму,
                и я свяжусь с вами в ближайшее время.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#6B5EA8]/10 flex items-center justify-center text-lg">📧</div>
                  <div>
                    <p className="text-xs text-gray-400">Электронная почта</p>
                    <p className="text-gray-700 font-medium">NadezhdaShevtsov1@yandex.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#6B5EA8]/10 flex items-center justify-center text-lg">🏫</div>
                  <div>
                    <p className="text-xs text-gray-400">Место работы</p>
                    <p className="text-gray-700 font-medium">Муниципальное бюджетное общеобразовательное учреждение Лысогорская средняя общеобразовательная школа, с. Лысогорка, Куйбышевского района, Ростовской области</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Форма обратной связи</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── AREAS SECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-16">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#6B5EA8] uppercase">Направления работы</span>
            <h2 className="text-3xl font-light text-gray-900 mt-3">Чем я могу помочь</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎓', title: 'Обучающимся', desc: 'Советы психолога, помощь в профориентации, работа с тревогой и учёбой', path: '/students/tips' },
              { icon: '👨‍👩‍👧', title: 'Родителям', desc: 'Консультации, советы по воспитанию, родительские собрания и встречи', path: '/parents/tips' },
              { icon: '📚', title: 'Педагогам', desc: 'Диагностические материалы, памятки, развивающие игры для работы в классе', path: '/teachers/diagnostic' },
              { icon: '🌱', title: 'Сказкотерапия', desc: 'Авторские сказки и методики для проработки трудных ситуаций через истории', path: '/interesting/fairytale' },
              { icon: '📋', title: 'Документы', desc: 'Программы, планы работы, отчётная документация и методические материалы', path: '/documents/programs' },
              { icon: '🏆', title: 'Достижения', desc: 'Публикации, повышение квалификации, профессиональные конкурсы', path: '/about/achievements' },
            ].map((card) => (
              <Link key={card.title} to={card.path} className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#6B5EA8]/30 group">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#6B5EA8] transition-colors">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS SECTION ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#6B5EA8] uppercase">Обновления</span>
              <h2 className="text-3xl font-light text-gray-900 mt-3">Новости и материалы</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tag: 'Советы психолога', date: '15 марта 2026', title: 'Как помочь ребёнку справиться с тревогой перед экзаменом', excerpt: 'Практические рекомендации для учеников и их родителей в период итоговой аттестации.', path: '/students/tips' },
              { tag: 'Родителям', date: '10 марта 2026', title: 'Родительское собрание: итоги и полезные ресурсы', excerpt: 'Материалы и презентации с последнего родительского собрания доступны для скачивания.', path: '/parents/meeting' },
              { tag: 'Сказкотерапия', date: '1 марта 2026', title: 'Новая сказка: «Дружба начинается с улыбки»', excerpt: 'Авторская терапевтическая сказка для работы с темой дружбы и принятия в коллективе.', path: '/interesting/fairytale' },
            ].map((post) => (
              <Link key={post.title} to={post.path} className="group cursor-pointer">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-5">
                  <img
                    src="/placeholder.jpg"
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#6B5EA8] bg-[#6B5EA8]/10 px-3 py-1 rounded-full">{post.tag}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#6B5EA8] transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white/60 py-12">
        <div className="container mx-auto px-8 md:px-16 text-center space-y-2">
          <p className="text-white font-light text-lg">Шевцова Надежда Николаевна</p>
          <p className="text-sm">Педагог-психолог</p>
          <p className="text-xs mt-4 opacity-40">© 2026 — Все права защищены</p>
        </div>
      </footer>
    </>
  );
}