import { useEffect, useState } from 'react';
import { Menu, Moon, X } from 'lucide-react';
import { AppRoute, navigateToRoute } from '../utils/router';

interface NavbarProps {
  currentRoute: AppRoute;
}

const NAV_LINKS: { route: AppRoute; label: string }[] = [
  { route: 'home', label: 'Home' },
  { route: 'about', label: 'About' },
  { route: 'science', label: 'Science' },
  { route: 'research', label: 'Research' },
  { route: 'journey', label: 'Journey' },
];

export function Navbar({ currentRoute }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentRoute]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (route: AppRoute) => {
    navigateToRoute(route);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#302044]/12 bg-[#F2E9D9]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#/home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="inline-flex items-center gap-2 font-serif text-lg font-bold tracking-tight text-[#302044] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2E9D9] rounded-md"
        >
          <Moon className="h-4 w-4 text-[#302044] shrink-0" aria-hidden="true" />
          <span>Sleep Better, Live Better</span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <a
                key={item.route}
                href={`#/${item.route}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.route);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] rounded-sm ${
                  isActive
                    ? 'text-[#302044] font-semibold'
                    : 'text-[#29242F]/80 hover:text-[#302044]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#302044] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#/guide"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('guide');
            }}
            aria-current={currentRoute === 'guide' ? 'page' : undefined}
            className={`hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2E9D9] ${
              currentRoute === 'guide'
                ? 'bg-[#302044] text-white'
                : 'bg-[#E9C75B] text-[#29242F] hover:bg-[#dfb944]'
            }`}
          >
            Sleep Guide
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#302044]/20 bg-white/80 text-[#302044] md:hidden hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044]"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="border-t border-[#302044]/10 bg-white px-4 py-4 md:hidden"
        >
          <ul className="space-y-1">
            {[
              ...NAV_LINKS,
              { route: 'guide' as AppRoute, label: 'Sleep Better Guide' },
              { route: 'references' as AppRoute, label: 'References & Sources' },
            ].map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <li key={item.route}>
                  <a
                    href={`#/${item.route}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.route);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#302044] text-white'
                        : 'text-[#29242F] hover:bg-[#F2E9D9]/70'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="text-xs text-[#E9C75B]">Current</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
