import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';
import Icon from '@/components/ui/icon';

export default function Plans() {
  return (
    <SubpageLayout section="Документы" title="Планы работы">
      <ContentBlock title="Годовые и рабочие планы">
        <div className="space-y-3">
          {[
            { name: 'План работы педагога-психолога на 2025–2026 учебный год', type: 'PDF', size: '1.2 МБ' },
            { name: 'Календарно-тематический план коррекционных занятий', type: 'DOCX', size: '860 КБ' },
            { name: 'План профилактической работы с обучающимися', type: 'PDF', size: '740 КБ' },
          ].map((doc) => (
            <div key={doc.name} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-[#6B5EA8]/5 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#6B5EA8]/10 rounded-lg flex items-center justify-center">
                  <Icon name="CalendarDays" size={18} className="text-[#6B5EA8]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                  <p className="text-xs text-gray-400">{doc.type} · {doc.size}</p>
                </div>
              </div>
              <Icon name="Download" size={16} className="text-gray-300 group-hover:text-[#6B5EA8] transition-colors" />
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить планы на новый учебный год" />
    </SubpageLayout>
  );
}
