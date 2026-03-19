import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';
import Icon from '@/components/ui/icon';

export default function Portfolio() {
  const info = [
    { label: 'Фамилия, имя, отчество', value: 'Шевцова Надежда Николаевна' },
    { label: 'Занимаемая должность', value: 'Педагог-психолог' },
    { label: 'Место работы', value: 'Муниципальное бюджетное общеобразовательное учреждение Лысогорская средняя общеобразовательная школа, с. Лысогорка, Куйбышевского района, Ростовской области' },
    { label: 'Преподаваемые дисциплины', value: '' },
    { label: 'Ученая степень', value: '' },
    { label: 'Ученое звание', value: '' },
    { label: 'Направление подготовки / специальность', value: '' },
    { label: 'Повышение квалификации / профессиональная переподготовка', value: '' },
    { label: 'Общий стаж', value: '' },
    { label: 'Стаж работы по специальности', value: '' },
  ];

  const results = [
    {
      title: 'Результаты освоения образовательных программ',
      description: 'Результаты освоения обучающимися образовательных программ по итогам мониторингов, проводимых образовательной организацией; результаты по преподаваемому предмету, курсу, модулю, дополнительной программе.',
    },
    {
      title: 'Сравнительный анализ деятельности за 3–5 лет',
      description: 'Сравнительный анализ на основании внешних и внутренних мониторингов, результаты промежуточной и итоговой аттестации обучающихся.',
    },
    {
      title: 'Работа по выявлению и развитию способностей',
      description: 'Результаты работы по выявлению и развитию способностей обучающихся к научной, творческой, физкультурно-спортивной деятельности; участие в олимпиадах, конкурсах, фестивалях, соревнованиях.',
    },
    {
      title: 'Повышение качества образования',
      description: 'Результаты работы по повышению качества образования, совершенствованию методов обучения и воспитания, транслированию в педагогических коллективах опыта практических результатов профессиональной деятельности.',
    },
    {
      title: 'Методическая работа',
      description: 'Результаты участия в работе методических объединений педагогических работников, разработке программно-методического сопровождения образовательного процесса, профессиональных конкурсах.',
    },
    {
      title: 'Научная и учебно-методическая работа',
      description: 'Научная и учебно-методическая работа педагогического работника. Формат представления материалов – текстовый с размещением текстовых таблиц, копии документов в формате PDF.',
    },
  ];

  return (
    <SubpageLayout section="О себе" title="Портфолио">
      <ContentBlock title="Основные сведения">
        <div className="space-y-4">
          {info.map((item) => (
            <div key={item.label} className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3 border-b border-gray-100 last:border-0">
              <p className="text-sm font-medium text-gray-500">{item.label}</p>
              <p className="text-sm text-gray-900">
                {item.value || <span className="text-gray-300 italic">не указано</span>}
              </p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock title="Результаты педагогической деятельности">
        <div className="space-y-5">
          {results.map((item, i) => (
            <div key={i} className="flex gap-4 py-4 border-b border-gray-50 last:border-0">
              <div className="w-8 h-8 rounded-full bg-[#6B5EA8]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="FileText" size={15} className="text-[#6B5EA8]" />
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      <EmptyBlock hint="Здесь можно разместить документы, таблицы и материалы в формате PDF" />
    </SubpageLayout>
  );
}
