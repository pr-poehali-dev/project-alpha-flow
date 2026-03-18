import SubpageLayout, { ContentBlock, EmptyBlock } from '@/components/SubpageLayout';

export default function ParentsTips() {
  return (
    <SubpageLayout section="Родителям" title="Советы родителям">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[
          { emoji: '💬', title: 'Как разговаривать с ребёнком об эмоциях', text: 'Называйте чувства вместе с ребёнком: «Я вижу, ты расстроен». Это учит его понимать себя и говорить о переживаниях, а не замыкаться или срываться.' },
          { emoji: '🏠', title: 'Безопасная атмосфера дома', text: 'Ребёнок должен знать: дома его примут любым. Ошибки — часть роста. Критикуйте поступок, но не личность. «Ты поступил неправильно» вместо «ты плохой».' },
          { emoji: '📱', title: 'Телефон и гаджеты: договориться, не запретить', text: 'Запреты работают хуже договорённостей. Обсудите вместе правила: когда, сколько и где использовать телефон. Соблюдайте их сами — вы пример.' },
          { emoji: '🎒', title: 'Школьный стресс: как помочь', text: 'Не добавляйте давления «а у Маши пятёрки». Спрашивайте не «какая оценка», а «что было интересного». Хвалите усилие, а не результат.' },
        ].map((tip) => (
          <ContentBlock key={tip.title}>
            <div className="text-3xl mb-4">{tip.emoji}</div>
            <h3 className="font-semibold text-gray-900 mb-3">{tip.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{tip.text}</p>
          </ContentBlock>
        ))}
      </div>
      <EmptyBlock hint="Здесь можно добавить новые советы, статьи и рекомендации для родителей" />
    </SubpageLayout>
  );
}
