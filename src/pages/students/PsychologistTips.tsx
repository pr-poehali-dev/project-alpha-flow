import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

export default function PsychologistTips() {
  return (
    <SubpageLayout section="Обучающимся" title="Советы психолога">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[
          { emoji: '😰', title: 'Как справиться с тревогой перед экзаменом', text: 'Дыши медленно: 4 секунды вдох, 4 — задержка, 6 — выдох. Это активирует парасимпатическую систему и снижает стресс. Вспомни, что ты уже справлялся с трудными ситуациями.' },
          { emoji: '😴', title: 'Режим и сон — основа успеха', text: 'Подростку нужно 8–10 часов сна. За час до сна убери телефон и включи мягкий свет. Мозг запоминает информацию именно во время сна — не жертвуй им ради зубрёжки.' },
          { emoji: '🤝', title: 'Что делать, если конфликт с одноклассниками', text: 'Не отвечай в гневе. Сделай паузу, описывай свои чувства (не обвиняй), ищи то, что важно обеим сторонам. Если не получается — обратись к школьному психологу.' },
          { emoji: '📵', title: 'Цифровая гигиена', text: 'Устанавливай лимиты на социальные сети. Каждые 45 минут за экраном — 10–15 минут перерыва. Выходи на улицу хотя бы 30 минут в день — это улучшает концентрацию.' },
        ].map((tip) => (
          <ContentBlock key={tip.title}>
            <div className="text-3xl mb-4">{tip.emoji}</div>
            <h3 className="font-semibold text-gray-900 mb-3">{tip.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{tip.text}</p>
          </ContentBlock>
        ))}
      </div>
      <EmptyBlock hint="Здесь можно добавить новые советы и статьи для обучающихся" />
    </SubpageLayout>
  );
}
