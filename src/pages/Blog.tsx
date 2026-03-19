import SubpageLayout, { EmptyBlock } from '@/components/SubpageLayout';

export default function Blog() {
  return (
    <SubpageLayout section="Блог" title="Новости и события">
      <EmptyBlock hint="Здесь будут публиковаться новости и события педагогической работы. Формат — текстовый." />
    </SubpageLayout>
  );
}
