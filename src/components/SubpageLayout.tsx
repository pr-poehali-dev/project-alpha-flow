import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

interface SubpageLayoutProps {
  section: string;
  title: string;
  children: React.ReactNode;
  backPath?: string;
}

export default function SubpageLayout({ section, title, children, backPath = '/' }: SubpageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 md:px-16 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#6B5EA8] transition-colors">
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
          <span className="text-sm font-medium text-gray-400">{section}</span>
        </div>
      </header>

      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16 py-12">
          <p className="text-xs font-semibold tracking-widest text-[#6B5EA8] uppercase mb-3">{section}</p>
          <h1 className="text-3xl font-light text-gray-900 md:text-4xl">{title}</h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 md:px-16 py-12">
        {children}
      </main>
    </div>
  );
}

interface ContentBlockProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentBlock({ title, children, className }: ContentBlockProps) {
  return (
    <div className={cn('bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-6', className)}>
      {title && <h2 className="text-xl font-semibold text-gray-900 mb-5 pb-4 border-b border-gray-100">{title}</h2>}
      {children}
    </div>
  );
}

export function EmptyBlock({ hint }: { hint: string }) {
  return (
    <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center text-gray-400">
      <Icon name="Plus" size={32} className="mx-auto mb-3 opacity-30" />
      <p className="text-sm">{hint}</p>
    </div>
  );
}
