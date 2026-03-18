import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

export default function Qualification() {
  return (
    <SubpageLayout section="О себе" title="Повышение квалификации">
      <ContentBlock title="Курсы и программы">
        <div className="space-y-5">
          {[
            { year: '2024', title: 'Современные методы психологической диагностики в образовании', org: 'Институт повышения квалификации', hours: '72 ч.' },
            { year: '2023', title: 'Арт-терапия и творческие методы в работе психолога', org: 'Центр профессионального развития', hours: '36 ч.' },
            { year: '2022', title: 'Сказкотерапия как метод психологической коррекции', org: 'Педагогический университет', hours: '72 ч.' },
          ].map((item) => (
            <div key={item.title} className="flex gap-6 py-4 border-b border-gray-50 last:border-0">
              <div className="text-lg font-light text-[#6B5EA8] w-12 flex-shrink-0">{item.year}</div>
              <div>
                <p className="font-medium text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500 mt-1">{item.org} · {item.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить новые курсы и сертификаты" />
    </SubpageLayout>
  );
}
