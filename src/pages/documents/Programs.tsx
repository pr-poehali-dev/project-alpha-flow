import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';
import Icon from '@/components/ui/icon';

const docItems = [
  'Примерные программы по предмету',
  'Рабочие программы',
  'Тематическое планирование',
  'Документы, подтверждающие участие в деятельности образовательной организации, конкурсах и мероприятиях',
  'Отчёты о результатах самообследования и информация о результатах деятельности',
  'Отчёты о проведённых мероприятиях',
  'Достижения обучающихся: исследовательские и проектные работы, эссе, дипломы, грамоты, сертификаты',
  'Тексты публикаций, материалов и статей педагогического работника',
];

export default function Programs() {
  return (
    <SubpageLayout section="Документы" title="Программы и документы">
      <ContentBlock title="Содержание раздела">
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          В данном разделе размещается информация о педагогическом работнике. Формат представления материалов — текстовый и (или) копии документов в формате PDF.
        </p>
        <div className="space-y-3">
          {docItems.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <div className="w-8 h-8 bg-[#6B5EA8]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="FileText" size={15} className="text-[#6B5EA8]" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить программы, документы и отчёты в формате PDF" />
    </SubpageLayout>
  );
}
