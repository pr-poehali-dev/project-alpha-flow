import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

export default function MO() {
  return (
    <SubpageLayout section="Документы" title="Деятельность в МО">
      <ContentBlock title="Методическое объединение педагогов-психологов">
        <div className="space-y-5">
          {[
            { date: 'Октябрь 2025', title: 'Заседание МО: «Современные подходы к диагностике адаптации первоклассников»', role: 'Докладчик' },
            { date: 'Январь 2025', title: 'Мастер-класс: «Арт-терапевтические техники в групповой работе»', role: 'Ведущий' },
            { date: 'Март 2024', title: 'Семинар: «Психологическое сопровождение ОВЗ»', role: 'Участник' },
          ].map((item) => (
            <div key={item.title} className="py-4 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs bg-[#6B5EA8]/10 text-[#6B5EA8] px-2 py-0.5 rounded-full">{item.role}</span>
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
              <p className="font-medium text-gray-900">{item.title}</p>
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить новые мероприятия МО" />
    </SubpageLayout>
  );
}
