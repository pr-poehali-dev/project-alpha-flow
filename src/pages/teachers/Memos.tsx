import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';
import Icon from '@/components/ui/icon';

const memos = [
  { name: 'Памятка «Признаки психологического неблагополучия у школьника»', type: 'PDF' },
  { name: 'Рекомендации по работе с гиперактивными детьми (СДВГ)', type: 'PDF' },
  { name: 'Как говорить с ребёнком о буллинге: советы педагогу', type: 'PDF' },
  { name: 'Алгоритм действий при суицидальных рисках', type: 'PDF' },
  { name: 'Памятка по адаптации детей с ОВЗ в классе', type: 'DOCX' },
];

export default function Memos() {
  return (
    <SubpageLayout section="Педагогам" title="Памятки">
      <ContentBlock title="Материалы для педагогов">
        <div className="space-y-3">
          {memos.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-[#6B5EA8]/5 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" size={18} className="text-amber-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.type}</p>
                </div>
              </div>
              <Icon name="Download" size={16} className="text-gray-300 group-hover:text-[#6B5EA8] transition-colors" />
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить новые памятки и рекомендации для педагогов" />
    </SubpageLayout>
  );
}
