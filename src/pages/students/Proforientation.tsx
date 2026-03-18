import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

export default function Proforientation() {
  return (
    <SubpageLayout section="Обучающимся" title="Профориентация">
      <ContentBlock title="Узнай себя — выбери профессию">
        <p className="text-gray-600 leading-relaxed mb-6">
          Выбор профессии — один из самых важных шагов в жизни. Не торопись и ориентируйся на свои интересы,
          сильные стороны и ценности, а не только на «престижность» или советы других.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { emoji: '🧠', title: 'Интересы', desc: 'Что тебе нравится делать? Чем ты занимаешься с удовольствием?' },
            { emoji: '💪', title: 'Способности', desc: 'Что у тебя хорошо получается? Где ты быстро добиваешься результата?' },
            { emoji: '🌟', title: 'Ценности', desc: 'Что важно для тебя в работе — творчество, помощь людям, стабильность?' },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-xl p-5">
              <div className="text-2xl mb-3">{card.emoji}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{card.title}</h4>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>
      <ContentBlock title="Материалы и тесты">
        <div className="space-y-3">
          {[
            'Тест «Профессиональные интересы» (Голланд)',
            'Анкета «Мои сильные стороны»',
            'Памятка «Как выбрать вуз или колледж»',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-[#6B5EA8]">→</span>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </ContentBlock>
      <EmptyBlock hint="Здесь можно добавить тесты, материалы и мероприятия по профориентации" />
    </SubpageLayout>
  );
}
