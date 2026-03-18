import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';
import Icon from '@/components/ui/icon';

const materials = [
  { name: 'Методика диагностики школьной тревожности (Филлипс)', age: '3–9 класс', type: 'PDF' },
  { name: 'Социометрия: инструкция и бланки', age: '2–11 класс', type: 'DOCX' },
  { name: 'Тест «Несуществующее животное» — интерпретация', age: '1–9 класс', type: 'PDF' },
  { name: 'Анкета адаптации первоклассников (для учителей)', age: '1 класс', type: 'DOCX' },
  { name: 'Диагностика профессиональных склонностей (Голланд)', age: '8–11 класс', type: 'PDF' },
];

export default function DiagnosticMaterials() {
  return (
    <SubpageLayout section="Педагогам" title="Диагностический материал">
      <ContentBlock title="Методики и инструменты">
        <div className="space-y-3">
          {materials.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-[#6B5EA8]/5 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#6B5EA8]/10 rounded-lg flex items-center justify-center">
                  <Icon name="ClipboardList" size={18} className="text-[#6B5EA8]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.age} · {item.type}</p>
                </div>
              </div>
              <Icon name="Download" size={16} className="text-gray-300 group-hover:text-[#6B5EA8] transition-colors" />
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить новые диагностические методики" />
    </SubpageLayout>
  );
}
