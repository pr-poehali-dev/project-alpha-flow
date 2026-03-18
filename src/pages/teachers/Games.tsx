import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

const games = [
  { emoji: '🎭', title: 'Эмоциональное лото', age: '6–10 лет', goal: 'Развитие эмоционального интеллекта, умения распознавать чувства', time: '20 мин' },
  { emoji: '🕸️', title: 'Паутина доверия', age: '10–16 лет', goal: 'Сплочение коллектива, развитие доверия и командного духа', time: '30 мин' },
  { emoji: '🎤', title: 'Я — это…', age: '12–17 лет', goal: 'Развитие самосознания, уверенности и навыков самопрезентации', time: '25 мин' },
  { emoji: '🌈', title: 'Цвет настроения', age: '7–12 лет', goal: 'Осознание своего эмоционального состояния, снятие напряжения', time: '15 мин' },
];

export default function Games() {
  return (
    <SubpageLayout section="Педагогам" title="Игры">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {games.map((game) => (
          <ContentBlock key={game.title}>
            <div className="text-3xl mb-4">{game.emoji}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{game.title}</h3>
            <div className="flex gap-3 mb-3">
              <span className="text-xs bg-[#6B5EA8]/10 text-[#6B5EA8] px-2 py-0.5 rounded-full">{game.age}</span>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">⏱ {game.time}</span>
            </div>
            <p className="text-sm text-gray-600">{game.goal}</p>
          </ContentBlock>
        ))}
      </div>
      <EmptyBlock hint="Здесь можно добавить новые игры и упражнения для педагогов" />
    </SubpageLayout>
  );
}
