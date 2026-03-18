import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';
import Icon from '@/components/ui/icon';

export default function ParentsMeeting() {
  return (
    <SubpageLayout section="Родителям" title="Родительское собрание">
      <ContentBlock title="Архив родительских собраний">
        <div className="space-y-4">
          {[
            { date: 'Февраль 2026', title: 'Подростковый кризис: как сохранить контакт с ребёнком', files: 2 },
            { date: 'Ноябрь 2025', title: 'Адаптация пятиклассников: на что обратить внимание', files: 3 },
            { date: 'Сентябрь 2025', title: 'Психологическая готовность к школе у первоклассников', files: 1 },
          ].map((meeting) => (
            <div key={meeting.title} className="flex items-start justify-between p-5 rounded-xl bg-gray-50 hover:bg-[#6B5EA8]/5 transition-colors group cursor-pointer">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#6B5EA8]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Users" size={18} className="text-[#6B5EA8]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">{meeting.date}</p>
                  <p className="font-medium text-gray-900">{meeting.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{meeting.files} {meeting.files === 1 ? 'файл' : 'файла'}</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={16} className="text-gray-300 group-hover:text-[#6B5EA8] transition-colors mt-1" />
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить материалы с новых родительских собраний" />
    </SubpageLayout>
  );
}
