import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';
import Icon from '@/components/ui/icon';

export default function Programs() {
  return (
    <SubpageLayout section="Документы" title="Программы">
      <ContentBlock title="Рабочие программы">
        <div className="space-y-3">
          {[
            { name: 'Программа психологического сопровождения 1–4 классов', type: 'PDF', size: '2.3 МБ' },
            { name: 'Программа коррекционно-развивающей работы с подростками', type: 'PDF', size: '1.8 МБ' },
            { name: 'Программа профориентационной работы 8–11 классов', type: 'DOCX', size: '980 КБ' },
          ].map((doc) => (
            <div key={doc.name} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-[#6B5EA8]/5 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#6B5EA8]/10 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={18} className="text-[#6B5EA8]" />
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
      <EmptyBlock hint="Здесь можно добавить новые программы и документы" />
    </SubpageLayout>
  );
}
