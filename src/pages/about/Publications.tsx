import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

export default function Publications() {
  return (
    <SubpageLayout section="О себе" title="Публикации">
      <ContentBlock title="Статьи и материалы">
        <div className="space-y-5">
          {[
            { year: '2025', title: 'Сказкотерапия как инструмент коррекции эмоционально-волевой сферы у детей младшего школьного возраста', where: 'Педагогический вестник' },
            { year: '2024', title: 'Профориентационная работа с подростками: системный подход', where: 'Школьный психолог' },
            { year: '2023', title: 'Игровые методы в диагностике межличностных отношений в детском коллективе', where: 'Психология в школе' },
          ].map((pub) => (
            <div key={pub.title} className="flex gap-5 py-4 border-b border-gray-50 last:border-0">
              <div className="text-lg font-light text-[#6B5EA8] w-12 flex-shrink-0">{pub.year}</div>
              <div>
                <p className="font-medium text-gray-900">{pub.title}</p>
                <p className="text-sm text-[#6B5EA8]/70 mt-1">{pub.where}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить новые публикации и ссылки на них" />
    </SubpageLayout>
  );
}
