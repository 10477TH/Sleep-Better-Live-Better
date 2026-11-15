import { ExternalLink, ShieldAlert } from 'lucide-react';
import { REFERENCES_LIST } from '../data/journeyData';
import { RevealSection } from '../components/RevealSection';
import { navigateToRoute } from '../utils/router';

export function ReferencesPage() {
  return (
    <div>
      <section className="bg-[#302044] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E9C75B]">
            Sources &amp; Verification
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            References &amp; Educational Disclaimer
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            The scientific concepts presented across Sleep Better, Live Better are informed by established public health agencies and sleep-science organizations.
          </p>
        </div>
      </section>

      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 space-y-8">
          {/* Disclaimer Banner */}
          <div className="rounded-2xl bg-[#E9C75B] p-6 text-[#29242F] sm:p-8">
            <div className="flex items-start gap-3.5">
              <ShieldAlert className="h-6 w-6 text-[#302044] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-2">
                <h2 className="font-serif text-2xl font-bold text-[#29242F]">
                  Educational Project — Not Medical Advice
                </h2>
                <p className="text-sm leading-relaxed text-[#29242F]/90">
                  Sleep Better, Live Better is a student-led M.3 community health education initiative. It is intended strictly for general educational awareness and does not constitute medical advice, diagnosis, or treatment.
                </p>
                <p className="text-sm leading-relaxed text-[#29242F]/90">
                  Readers are encouraged to verify health information with official public-health resources or consult a qualified doctor, school nurse, or healthcare professional regarding persistent sleep difficulties or personal health concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Sources List */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#302044] sm:text-3xl">
              Official Health &amp; Science Sources
            </h2>
            <p className="mt-2 text-sm text-[#29242F]/80">
              Links point directly to stable organizational homepages and main topic portals.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {REFERENCES_LIST.map((ref) => (
                <article
                  key={ref.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#302044]/12 bg-white p-6 shadow-sm"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#302044]/75">
                      {ref.tier}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-bold text-[#302044]">
                      {ref.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#29242F]/70">
                      {ref.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#29242F]/85">
                      {ref.scope}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#302044]/10 pt-3">
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#302044] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] rounded-sm"
                    >
                      <span>Visit {ref.domainLabel}</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#/home"
              onClick={(e) => {
                e.preventDefault();
                navigateToRoute('home');
              }}
              className="inline-flex min-h-[44px] items-center rounded-lg bg-[#302044] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3f2c58]"
            >
              Return to Home
            </a>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
