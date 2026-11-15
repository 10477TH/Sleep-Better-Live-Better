import {
  ArrowRight,
  BookOpen,
  Brain,
  Clock,
  Compass,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  Smile,
  Sparkles,
} from 'lucide-react';
import { PROJECT_CONFIG } from '../config/projectConfig';
import { navigateToRoute } from '../utils/router';
import { RevealSection } from '../components/RevealSection';
import {
  HeroMoonHorizonSvg,
  TeenSleepWindowSvg,
} from '../components/illustrations/SleepIllustrations';

const WHY_SLEEP_PILLARS = [
  {
    title: 'Memory & Learning',
    description:
      'During sleep, your brain organizes new facts, vocabulary, and problem-solving steps learned during the day so you can recall them later.',
    icon: Brain,
  },
  {
    title: 'Brain Function & Focus',
    description:
      'Rested neural pathways support clearer attention, faster reaction time, and steadier decision-making in class and everyday tasks.',
    icon: Lightbulb,
  },
  {
    title: 'Emotional Regulation',
    description:
      'Adequate sleep helps the brain process daily stress and manage emotions more calmly when challenges come up.',
    icon: Smile,
  },
  {
    title: 'Physical Development',
    description:
      'Deep sleep supports tissue repair, muscle recovery, and natural growth processes that are especially active during adolescence.',
    icon: HeartPulse,
  },
  {
    title: 'Overall Health',
    description:
      'Consistent, quality sleep supports immune defenses, balanced energy, and long-term physical and mental well-being.',
    icon: ShieldCheck,
  },
];

const DID_YOU_KNOW_FACTS = [
  {
    stat: '8–10 hrs',
    title: 'Recommended nightly sleep for teens (ages 13–18)',
    detail:
      'Health authorities such as the CDC and American Academy of Sleep Medicine recommend 8 to 10 hours per 24 hours for teenagers.',
    accent: 'bg-[#E9C75B] text-[#29242F]',
  },
  {
    stat: '~24 hrs',
    title: 'Your internal body clock runs on light and darkness',
    detail:
      'Morning daylight helps wake up your circadian rhythm, while evening darkness signals your brain to release melatonin.',
    accent: 'bg-[#C994A8] text-[#29242F]',
  },
  {
    stat: '4 Stages',
    title: 'Sleep cycles repeat across the whole night',
    detail:
      'NREM stages 1–3 and REM sleep each play distinct roles—longer REM phases happen later in the night, so cutting sleep short skips key stages.',
    accent: 'bg-white text-[#29242F]',
  },
];

const EXPLORE_PAGES = [
  {
    route: 'science' as const,
    kicker: 'Biology & Cycles',
    title: 'Sleep Science',
    description:
      'Explore why we sleep, how the 24-hour circadian clock works, sleep stages, and why teenage sleep timing naturally shifts.',
    cta: 'Read Sleep Science',
  },
  {
    route: 'research' as const,
    kicker: '45 Respondents',
    title: 'Our Research',
    description:
      'See what our community questionnaire revealed about student ages, 11 PM–12 AM bedtimes, observations, and honest study limits.',
    cta: 'Explore Survey Data',
  },
  {
    route: 'guide' as const,
    kicker: 'Interactive Tools',
    title: 'Sleep Better Guide',
    description:
      'Build a practical bedtime routine with our interactive checklist, learn how caffeine affects sleep, and test your knowledge in a 7-question quiz.',
    cta: 'Open Sleep Guide',
  },
  {
    route: 'journey' as const,
    kicker: 'M.3 Community Project',
    title: 'Our Project Journey',
    description:
      'Follow how our three-student team moved from a local questionnaire and video to a live school community presentation.',
    cta: 'View Our Journey',
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#302044] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E9C75B]">
                {PROJECT_CONFIG.gradeLevel}
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Better Sleep. Better Health. Better Life.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Discover the science behind sleep, understand your sleeping habits, and learn how small changes can make a difference in your everyday life.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#/science"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToRoute('science');
                  }}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#E9C75B] px-5 py-2.5 text-sm font-semibold text-[#29242F] transition-colors hover:bg-[#dfb944] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Explore Sleep Science</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#/research"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToRoute('research');
                  }}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9C75B]"
                >
                  <span>Discover Our Research</span>
                </a>
              </div>

              <div className="border-t border-white/15 pt-5 text-sm leading-relaxed text-white/80 max-w-xl">
                <strong className="text-[#E9C75B]">About this initiative:</strong> Sleep Better, Live Better is a student-led health education project created by three M.3 students. Our core message is simple: <em>sleep is not wasted time—it is an essential investment in our health, learning, and everyday lives.</em>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="mx-auto max-w-md lg:max-w-none">
                <HeroMoonHorizonSvg />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section A: Why Sleep Matters */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
              Core Foundations
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#302044] sm:text-4xl">
              Why Sleep Matters Every Single Day
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#29242F]/85">
              When life gets busy with homework, exams, and screens, sleep is often the first thing cut short. Yet your brain and body rely on sleep to do work that cannot happen while you are awake.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_SLEEP_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-[#302044]/10 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2E9D9] text-[#302044]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-[#302044]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#29242F]/85">
                    {pillar.description}
                  </p>
                </article>
              );
            })}

            {/* Highlight summary card */}
            <article className="flex flex-col justify-between rounded-2xl bg-[#302044] p-6 text-white shadow-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E9C75B]">
                  Core Principle
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-white">
                  Sleep Is Active Recovery, Not Lost Time
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Investing in regular sleep protects your attention in class, your mood with friends and family, and your physical energy.
                </p>
              </div>
              <div className="mt-5">
                <a
                  href="#/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToRoute('about');
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E9C75B] hover:underline"
                >
                  <span>Why we started this project</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>
      </RevealSection>

      {/* Section B: Did You Know? */}
      <RevealSection>
        <section className="border-y border-[#302044]/10 bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
                  Did You Know?
                </p>
                <h2 className="font-serif text-3xl font-bold text-[#302044] sm:text-4xl">
                  Key Sleep Facts for Students &amp; Families
                </h2>
                <p className="text-sm leading-relaxed text-[#29242F]/85">
                  Teens aged 13–18 have growing brains and shifting biological clocks—making <strong>8–10 hours of sleep per 24 hours</strong> the recommended daily target.
                </p>
                <div className="pt-2">
                  <TeenSleepWindowSvg />
                </div>
              </div>

              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {DID_YOU_KNOW_FACTS.map((fact) => (
                  <article
                    key={fact.title}
                    className={`rounded-2xl border border-[#302044]/12 p-5 sm:p-6 ${fact.accent}`}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="font-serif text-2xl font-bold text-[#302044] tabular-nums shrink-0">
                        {fact.stat}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-[#29242F]">
                          {fact.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#29242F]/85">
                          {fact.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Section C: Navigation Cards */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
                Project Sections
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-[#302044]">
                Continue Exploring
              </h2>
            </div>
            <p className="text-sm text-[#29242F]/75 max-w-md">
              Read the biology, review our 45-person student survey, or try the interactive bedtime checklist and quiz.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPLORE_PAGES.map((card, index) => {
              const icons = [BookOpen, Clock, Sparkles, Compass];
              const CardIcon = icons[index % icons.length];
              return (
                <article
                  key={card.route}
                  className="flex flex-col justify-between rounded-2xl border border-[#302044]/12 bg-white p-6 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#302044]/75">
                      <span>{card.kicker}</span>
                      <CardIcon className="h-4 w-4 text-[#302044]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 font-serif text-xl font-semibold text-[#302044]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#29242F]/85">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#302044]/10">
                    <a
                      href={`#/${card.route}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToRoute(card.route);
                      }}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#302044] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] rounded-sm"
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </RevealSection>

      {/* Section D: Final CTA */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#302044] px-6 py-12 text-center text-white sm:px-12 sm:py-14">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-white sm:text-4xl">
              Start taking your sleep seriously. Your health deserves it.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Even one or two small adjustments—like setting a consistent bedtime or dimming screens 30 minutes earlier—can help support tomorrow&apos;s energy and focus.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#/guide"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToRoute('guide');
                }}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#E9C75B] px-5 py-2.5 text-sm font-semibold text-[#29242F] transition-colors hover:bg-[#dfb944] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Try the Bedtime Checklist &amp; Quiz</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#/science"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToRoute('science');
                }}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#C994A8] px-5 py-2.5 text-sm font-semibold text-[#29242F] transition-colors hover:bg-[#bc8399] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Learn the Science First</span>
              </a>
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
