import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

const tales = [
  {
    title: 'Дружба начинается с улыбки',
    theme: 'Дружба и принятие',
    age: '6–9 лет',
    desc: 'История о маленьком ёжике, который боялся, что его никто не полюбит из-за колючек, но обнаружил, что именно его особенность помогла друзьям.',
    emoji: '🦔',
  },
  {
    title: 'Облако, которое боялось грозы',
    theme: 'Страхи и тревога',
    age: '5–8 лет',
    desc: 'Сказка о маленьком облаке, которое очень боялось грозы. Путешествие по небу помогло ему понять, что страх — это нормально, и найти своих друзей.',
    emoji: '☁️',
  },
  {
    title: 'Волшебный дневник',
    theme: 'Самовыражение и эмоции',
    age: '8–12 лет',
    desc: 'Мила получила в подарок дневник, который умел разговаривать. Вместе они научились понимать и принимать самые разные чувства.',
    emoji: '📓',
  },
];

export default function Fairytale() {
  return (
    <SubpageLayout section="Интересно" title="Сказкотерапия">
      <ContentBlock title="Что такое сказкотерапия">
        <p className="text-gray-600 leading-relaxed">
          Сказкотерапия — один из самых мягких и эффективных методов психологической работы с детьми.
          Через метафору и образы ребёнок может безопасно прожить сложные ситуации, найти ресурсы
          и получить новый опыт. Я использую авторские терапевтические сказки в индивидуальной и групповой работе.
        </p>
      </ContentBlock>

      <h2 className="text-xl font-semibold text-gray-900 mb-5">Авторские сказки</h2>
      <div className="space-y-5 mb-6">
        {tales.map((tale) => (
          <div key={tale.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 hover:border-[#6B5EA8]/30 transition-colors cursor-pointer group">
            <div className="flex items-start gap-5">
              <div className="text-4xl">{tale.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs bg-[#6B5EA8]/10 text-[#6B5EA8] px-2 py-0.5 rounded-full">{tale.theme}</span>
                  <span className="text-xs text-gray-400">{tale.age}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#6B5EA8] transition-colors">{tale.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tale.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EmptyBlock hint="Здесь можно добавить новые авторские сказки и методические материалы" />
    </SubpageLayout>
  );
}
