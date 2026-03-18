import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

export default function Achievements() {
  return (
    <SubpageLayout section="О себе" title="Мои достижения">
      <ContentBlock title="Награды и дипломы">
        <div className="space-y-5">
          {[
            { year: '2025', title: 'Лауреат конкурса «Лучший педагог-психолог района»', level: 'Районный уровень' },
            { year: '2024', title: 'Победитель конкурса профессионального мастерства', level: 'Муниципальный уровень' },
            { year: '2023', title: 'Грамота за вклад в развитие психологической службы образования', level: 'Городской уровень' },
          ].map((item) => (
            <div key={item.title} className="flex gap-5 items-start py-4 border-b border-gray-50 last:border-0">
              <div className="text-2xl">🏆</div>
              <div>
                <p className="font-medium text-gray-900">{item.title}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs bg-[#6B5EA8]/10 text-[#6B5EA8] px-2 py-0.5 rounded-full">{item.level}</span>
                  <span className="text-sm text-gray-400">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить новые награды, грамоты и дипломы" />
    </SubpageLayout>
  );
}
