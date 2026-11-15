import { ArrowUp, Moon } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/projectConfig';
import { AppRoute, navigateToRoute } from '../utils/router';

interface FooterProps {
  currentRoute: AppRoute;
}

const FOOTER_LINKS: { route: AppRoute; label: string }[] = [
  { route: 'home', label: 'Home' },
  { route: 'about', label: 'About Us' },
  { route: 'science', label: 'Sleep Science' },
  { route: 'research', label: 'Our Research' },
  { route: 'guide', label: 'Sleep Better Guide' },
  { route: 'journey', label: 'Project Journey' },
  { route: 'references', label: 'References' },
];

export function Footer({ currentRoute }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#302044]/15 bg-[#302044] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Project Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <Moon className="h-5 w-5 text-[#E9C75B]" aria-hidden="true" />
              <span className="font-serif text-xl font-semibold text-white">
                {PROJECT_CONFIG.projectName}
              </span>
            </div>
            <p className="text-sm font-medium text-[#E9C75B]">
              {PROJECT_CONFIG.slogan}
            </p>
            <p className="text-sm leading-relaxed text-white/80 max-w-md">
              A student-led community health project by three M.3 students. Sleep is not wasted time—it is an essential investment in health, learning, and everyday well-being.
            </p>
            <div className="pt-1 text-xs text-white/75 space-y-1">
              <p>School: {PROJECT_CONFIG.schoolName}</p>
              <p>Advisor: {PROJECT_CONFIG.teacherAdvisor}</p>
              <p>
                Team: {PROJECT_CONFIG.teamMembers.map((m) => m.name).join(', ')}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#E9C75B]">
              Explore Pages
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <li key={link.route}>
                    <a
                      href={`#/${link.route}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToRoute(link.route);
                      }}
                      className={`inline-block py-0.5 transition-colors hover:text-[#E9C75B] focus:outline-none focus-visible:underline ${
                        isActive ? 'text-[#E9C75B] font-semibold' : 'text-white/85'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Disclaimer & Top Button */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-xs leading-relaxed text-white/80">
              <p className="font-semibold text-white mb-1">Educational Notice</p>
              <p>
                This website is an educational student health project and does not provide medical advice. If you have ongoing sleep difficulties, please consult a qualified healthcare professional.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-lg bg-[#E9C75B] px-4 py-2 text-xs font-semibold text-[#29242F] transition-colors hover:bg-[#dfb944] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {PROJECT_CONFIG.projectName} · {PROJECT_CONFIG.gradeLevel}
          </p>
          <p>
            Health science sources:{' '}
            <a
              href="#/references"
              onClick={(e) => {
                e.preventDefault();
                navigateToRoute('references');
              }}
              className="underline decoration-[#E9C75B]/60 underline-offset-4 hover:text-[#E9C75B]"
            >
              View References &amp; Citations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
