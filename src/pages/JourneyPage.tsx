import { ArrowRight, Compass, Lightbulb, Quote } from 'lucide-react';
import {
  JOURNEY_TIMELINE,
  PROJECT_CHALLENGES,
  TEAM_LEARNINGS,
} from '../data/journeyData';
import { RevealSection } from '../components/RevealSection';
import { navigateToRoute } from '../utils/router';

export function JourneyPage() {
  const challengeAccents = [
    'bg-[#E9C75B] text-[#29242F]',
    'bg-[#C994A8] text-[#29242F]',
    'bg-white text-[#29242F]',
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-[#302044] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E9C75B]">
            Our Project Journey
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            From Research to Community Impact
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            Building a student-led health project meant learning by doing—collecting community answers, translating sleep science, testing media outreach, and preparing to speak face-to-face with students, parents, and adults.
          </p>
        </div>
      </section>

      {/* Featured Quote */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
          <blockquote className="rounded-3xl bg-[#E9C75B] px-6 py-8 text-[#29242F] sm:px-10 sm:py-10">
            <Quote className="h-7 w-7 text-[#302044]" aria-hidden="true" />
            <p className="mt-3 font-serif text-2xl font-bold leading-snug text-[#29242F] sm:text-3xl">
              &ldquo;Creating educational content is only one part of making a difference. We also need to make sure that information reaches the people who need it.&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#302044]">
              Key Reflection · Sleep Better, Live Better Project Team
            </footer>
          </blockquote>
        </section>
      </RevealSection>

      {/* Timeline of Activities */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
            <Compass className="h-4 w-4 text-[#302044]" aria-hidden="true" />
            <span>Project Timeline</span>
          </div>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#302044]">
            Four Phases of Our Initiative
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {JOURNEY_TIMELINE.map((milestone) => (
              <article
                key={milestone.step}
                className="rounded-2xl border border-[#302044]/12 bg-white p-6 shadow-sm"
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-[#302044]/10 pb-3">
                  <span className="font-serif text-3xl font-bold text-[#302044] tabular-nums">
                    {milestone.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#302044]/75">
                    {milestone.phase}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#302044]">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#29242F]/85">
                  {milestone.summary}
                </p>
                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-[#29242F]/85">
                  {milestone.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#302044] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* Challenges Section */}
      <RevealSection>
        <section className="border-y border-[#302044]/10 bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
                Honest Reflections
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-[#302044]">
                Challenges We Encountered
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#29242F]/85">
                Real community projects rarely go smoothly on the first try. Recognizing what didn&apos;t go as planned helped us improve how we communicate.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {PROJECT_CHALLENGES.map((challenge, idx) => (
                <article
                  key={challenge.id}
                  className={`flex flex-col justify-between rounded-2xl border border-[#302044]/15 p-6 ${challengeAccents[idx % challengeAccents.length]}`}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#302044]">
                      {challenge.category}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-bold text-[#29242F]">
                      {challenge.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#29242F]/90">
                      {challenge.description}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-[#29242F]/15 pt-3 text-xs font-medium text-[#29242F]">
                    <strong>What this taught us:</strong> {challenge.takeaway}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* What We Learned */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
                <Lightbulb className="h-4 w-4 text-[#302044]" aria-hidden="true" />
                <span>Growth &amp; Takeaways</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#302044]">
                What We Learned Together
              </h2>
              <p className="text-base leading-relaxed text-[#29242F]/85">
                Working as a three-student M.3 team taught us skills far beyond biology class—from handling real survey limitations to speaking clearly in front of 30–50 students, parents, and adults.
              </p>
              <div className="pt-2">
                <a
                  href="#/references"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToRoute('references');
                  }}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#302044] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3f2c58]"
                >
                  <span>View Scientific References</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {TEAM_LEARNINGS.map((learning, idx) => (
                <article
                  key={learning.title}
                  className="rounded-2xl border border-[#302044]/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-lg font-bold text-[#302044] tabular-nums">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#302044]">
                        {learning.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#29242F]/85">
                        {learning.detail}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
