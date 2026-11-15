import { BarChart3, BookOpen, Eye } from 'lucide-react';
import { ContentSourceTag } from '../data/survey';

interface SourceLabelProps {
  source: ContentSourceTag;
  className?: string;
}

export function SourceLabel({ source, className = '' }: SourceLabelProps) {
  if (source === 'Our survey data') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#302044] ${className}`}
      >
        <BarChart3 className="h-3.5 w-3.5 text-[#302044]" aria-hidden="true" />
        <span>Our survey data</span>
      </div>
    );
  }

  if (source === "Our team's observation") {
    return (
      <div
        className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#302044] ${className}`}
      >
        <Eye className="h-3.5 w-3.5 text-[#302044]" aria-hidden="true" />
        <span>Our team&apos;s observation</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#29242F]/80 ${className}`}
    >
      <BookOpen className="h-3.5 w-3.5 text-[#302044]" aria-hidden="true" />
      <span>Scientific information (external source)</span>
    </div>
  );
}
