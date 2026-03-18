import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

export default function Results() {
  return (
    <SubpageLayout section="О себе" title="Результаты профессиональной деятельности">
      <ContentBlock title="Ключевые результаты">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[
            { value: '500+', label: 'Проведено консультаций' },
            { value: '95%', label: 'Удовлетворённость родителей' },
            { value: '10', label: 'Лет в профессии' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-[#6B5EA8]/5 rounded-xl">
              <p className="text-4xl font-light text-[#6B5EA8]">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>Систематическая работа по созданию психологически безопасной образовательной среды позволила снизить уровень тревожности учащихся и улучшить климат в классных коллективах.</p>
          <p>Разработаны и внедрены программы психологического сопровождения для учащихся разных возрастных групп.</p>
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить отчёты, графики и другие результаты" />
    </SubpageLayout>
  );
}
