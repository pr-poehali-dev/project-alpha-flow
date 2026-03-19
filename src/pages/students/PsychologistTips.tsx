import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';
import Icon from '@/components/ui/icon';

const sections = [
  {
    title: 'Конспекты уроков и учебные материалы',
    description: 'Конспекты уроков, дополнительная расширенная информация и рекомендации по учебной программе, включая информацию об электронных учебниках и учебных пособиях.',
  },
  {
    title: 'Авторские цифровые образовательные ресурсы',
    description: 'Авторские цифровые образовательные ресурсы, разработанные педагогом-психологом для обучающихся.',
  },
  {
    title: 'Полезные ссылки',
    description: 'Ссылки на русскоязычные и зарубежные ресурсы по тематике психологии, развития и образования.',
  },
  {
    title: 'Олимпиады и конкурсы',
    description: 'Информация и анонсы об олимпиадах, конкурсах и других мероприятиях для обучающихся.',
  },
  {
    title: 'Расписание занятий',
    description: 'Расписание занятий и другая информация организационного характера.',
  },
  {
    title: 'Видеозаписи открытых уроков и вебинаров',
    description: 'Видеозаписи открытых уроков и вебинаров с участием педагогического работника.',
  },
];

export default function PsychologistTips() {
  return (
    <SubpageLayout section="Обучающимся" title="Материалы для обучающихся">
      <ContentBlock title="О разделе">
        <p className="text-sm text-gray-500 leading-relaxed">
          Раздел содержит информацию образовательного характера для обучающихся. На базе данного раздела организуется дистанционное обучение: дистанционные курсы, вебинары, тесты, опросы и консультации по предмету. Формат представления материалов — текстовый и (или) копии документов в формате PDF.
        </p>
      </ContentBlock>
      <ContentBlock title="Содержание раздела">
        <div className="space-y-4">
          {sections.map((item, i) => (
            <div key={i} className="flex gap-4 py-4 border-b border-gray-50 last:border-0">
              <div className="w-8 h-8 rounded-full bg-[#6B5EA8]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="BookOpen" size={15} className="text-[#6B5EA8]" />
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить материалы, ссылки и видеозаписи для обучающихся" />
    </SubpageLayout>
  );
}
