import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#302044] text-white shadow-lg ring-2 ring-[#E9C75B] transition-transform hover:-translate-y-0.5 hover:bg-[#3f2c58] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E9C75B]"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
