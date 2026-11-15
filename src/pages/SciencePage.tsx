import { AlertTriangle, BookOpen, Brain, HeartPulse, Smile } from 'lucide-react';
import { RevealSection } from '../components/RevealSection';
import { SourceLabel } from '../components/SourceLabel';
import { CircadianClockInteractive } from '../components/interactive/CircadianClockInteractive';
import { SleepHypnogramInteractive } from '../components/interactive/SleepHypnogramInteractive';
import {
  BrainSleepSvg,
  TeenSleepWindowSvg,
} from '../components/illustrations/SleepIllustrations';
import { navigateToRoute } from '../utils/router';

const WHY_NEED_SLEEP_LIST = [
  {
    title: 'Memory Consolidation',
    text: 'Sleep helps transfer temporary short-term memories from the day into more stable long-term networks.',
  },
  {
    title: 'Learning & Cognitive Performance',
    text: 'Rest supports attention span, problem-solving, reading comprehension, and creative connections.',
  },
  {
    title: 'Emotional Regulation',
    text: 'Well-rested brain circuits communicate more smoothly with emotional centers, helping steady mood.',
  },
  {
    title: 'Immune Function',
    text: 'During sleep, the body produces and coordinates immune signals that help defend against everyday illness.',
  },
  {
    title: 'Physical Growth & Repair',
    text: 'Growth hormones and tissue-repair processes increase during deeper stages of sleep.',
  },
  {
    title: 'Overall Well-Being',
    text: 'Consistent rest supports healthy metabolism, daytime energy, and safety in everyday activities.',
  },
];

const INSUFFICIENT_SLEEP_GROUPS = [
  {
    group: 'Brain',
    icon: Brain,
    accent: 'bg-[#E9C75B]',
    points: [
      'Reduced attention and slower reaction times',
      'Difficulty concentrating on multi-step tasks',
      'Memory difficulties when encoding or recalling information',
    ],
  },
  {
    group: 'Emotional Well-Being',
    icon: Smile,
    accent: 'bg-[#C994A8]',
    points: [
      'Increased irritability or feeling easily frustrated',
      'Noticeable mood changes across the day',
      'Greater difficulty regulating emotions under stress',
    ],
  },
  {
    group: 'Physical Health',
    icon: HeartPulse,
    accent: 'bg-[#F2E9D9]',
    points: [
      'Effects on normal immune system function',
      'Reduced physical alertness and daytime energy',
      'Disruption of normal daily body processes and recovery',
    ],
  },
  {
    group: 'Learning',
    icon: BookOpen,
    accent: 'bg-white',
    points: [
      'Reduced study efficiency even when spending more hours awake',
      'Difficulty sustaining attention during lessons or reading',
      'Harder time retaining newly practiced concepts',
    ],
  },
];

export function SciencePage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#302044] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SourceLabel
            source="Scientific information (external source)"
            className="text-[#E9C75B] [&_svg]:text-[#E9C75B]"
          />
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            Understand the Science of Sleep
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            Science shows that sleep is an active, carefully organized biological process. Explore the five key topics below—including an interactive 24-hour circadian clock and sleep-cycle diagram.
          </p>

          {/* Topic jump buttons */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              { id: 'topic-why', label: '1. Why We Need Sleep' },
              { id: 'topic-insufficient', label: '2. Not Enough Sleep' },
              { id: 'topic-circadian', label: '3. Circadian Rhythm' },
              { id: 'topic-stages', label: '4. Sleep Stages' },
              { id: 'topic-teens', label: '5. Sleep & Teenagers' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-lg bg-white/12 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#E9C75B] hover:text-[#29242F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9C75B]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 1: Why Do We Need Sleep? */}
      <RevealSection>
        <section id="topic-why" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
                Topic 01
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#302044]">
                Why Do We Need Sleep?
              </h2>
              <p className="text-base leading-relaxed text-[#29242F]/85">
                While you rest quietly, your brain and body perform essential maintenance—strengthening memories, clearing metabolic waste, calibrating emotions, and repairing tissues.
              </p>
              <div className="pt-2">
                <BrainSleepSvg />
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {WHY_NEED_SLEEP_LIST.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#302044]/10 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-serif text-lg font-semibold text-[#302044]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#29242F]/85">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Topic 2: What Happens When We Don't Get Enough Sleep? */}
      <RevealSection>
        <section
          id="topic-insufficient"
          className="border-y border-[#302044]/10 bg-white py-14 scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
                Topic 02
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-[#302044]">
                What Happens When We Don&apos;t Get Enough Sleep?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#29242F]/85">
                Missing sleep does not just make you feel sleepy—it can affect how you think, feel, learn, and recover physically. At the same time, <strong>effects vary from person to person</strong> depending on age, stress, and how many nights of short sleep build up.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {INSUFFICIENT_SLEEP_GROUPS.map((grp) => {
                const Icon = grp.icon;
                return (
                  <article
                    key={grp.group}
                    className={`rounded-2xl border border-[#302044]/12 p-6 ${grp.accent} text-[#29242F]`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#302044] text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#302044]">
                        {grp.group}
                      </h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#29242F]/90">
                      {grp.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#302044] shrink-0" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F2E9D9] p-4 text-sm text-[#29242F]">
              <AlertTriangle className="h-5 w-5 text-[#302044] shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                <strong>Balanced perspective:</strong> A single short night does not automatically cause severe harm, and different people respond differently. What matters most is avoiding ongoing, chronic sleep shortage over weeks and months.
              </p>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Topic 3: Circadian Rhythm */}
      <RevealSection>
        <section id="topic-circadian" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
              Topic 03
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-[#302044]">
              Circadian Rhythm: Your Internal 24-Hour Clock
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#29242F]/85">
              Your body runs an internal ~24-hour timing system called the <strong>circadian rhythm</strong>. Guided by light entering the eyes, this clock coordinates your sleep-wake cycle, hormone signals like <strong>melatonin</strong>, and small daily rises and drops in core body temperature.
            </p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#302044]/10 bg-white p-5">
              <h3 className="font-serif text-lg font-semibold text-[#302044]">
                Light &amp; Melatonin
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#29242F]/85">
                Morning sunlight signals wakefulness and shuts down melatonin. Darkness lets melatonin rise in the evening to prepare your body for sleep.
              </p>
            </div>
            <div className="rounded-2xl border border-[#302044]/10 bg-white p-5">
              <h3 className="font-serif text-lg font-semibold text-[#302044]">
                Body Temperature Shifts
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#29242F]/85">
                Core body temperature naturally cools slightly at night to support deeper sleep and warms toward morning to help you wake up.
              </p>
            </div>
            <div className="rounded-2xl border border-[#302044]/10 bg-white p-5">
              <h3 className="font-serif text-lg font-semibold text-[#302044]">
                Why Consistency Matters
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#29242F]/85">
                Sleeping at wildly different hours confuses your internal clock—similar to mild jet lag—making it harder to fall asleep and wake up alert.
              </p>
            </div>
          </div>

          <CircadianClockInteractive />
        </section>
      </RevealSection>

      {/* Topic 4: Sleep Stages */}
      <RevealSection>
        <section
          id="topic-stages"
          className="border-y border-[#302044]/10 bg-white py-14 scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
                Topic 04
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-[#302044]">
                Sleep Stages: NREM 1, 2, 3 &amp; REM
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#29242F]/85">
                Sleep is not one flat state. Across a typical night, your brain cycles repeatedly through Non-REM (NREM Stages 1, 2, and 3) and Rapid Eye Movement (REM) sleep—each supporting physical recovery, brain maintenance, and memory in different ways.
              </p>
            </div>

            <SleepHypnogramInteractive />
          </div>
        </section>
      </RevealSection>

      {/* Topic 5: Sleep and Teenagers */}
      <RevealSection>
        <section id="topic-teens" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="rounded-3xl bg-[#302044] p-6 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E9C75B]">
                  Topic 05 · Adolescent Sleep Biology
                </p>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                  Sleep and Teenagers (Ages 13–18)
                </h2>
                <p className="text-base leading-relaxed text-white/85">
                  During adolescence, natural biological changes can shift the circadian clock later—meaning teenagers often do not feel sleepy as early as younger children or adults. At the same time, early school start times, heavy homework loads, clubs, and late-night screens squeeze the available sleep window.
                </p>
                <p className="text-base leading-relaxed text-white/85">
                  Yet teens still need substantial rest for brain maturation, learning, emotional balance, and physical growth. Protecting an <strong>8–10 hour sleep window per night</strong> helps students handle schoolwork and stress much more steadily.
                </p>
                <div className="pt-2">
                  <TeenSleepWindowSvg />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl bg-[#E9C75B] p-6 text-[#29242F]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#302044]">
                    Guideline for Ages 13–18
                  </p>
                  <p className="mt-1 font-serif text-4xl font-bold tabular-nums text-[#29242F]">
                    8–10 Hours
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#29242F]/90">
                    Recommended regular sleep per 24 hours to support optimal health, attention, and emotional well-being.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 text-white">
                  <h3 className="font-serif text-lg font-semibold text-white">
                    See How This Connects to Our Survey
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    In our 45-person student and community survey, 40% reported going to bed between 11 PM and 12 AM—making 8–10 hours tough on school nights.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="#/research"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToRoute('research');
                      }}
                      className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[#302044] hover:bg-[#F2E9D9]"
                    >
                      View Our Research
                    </a>
                    <a
                      href="#/guide"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToRoute('guide');
                      }}
                      className="inline-flex items-center rounded-lg bg-[#C994A8] px-4 py-2 text-xs font-semibold text-[#29242F] hover:bg-[#bc8399]"
                    >
                      Practical Sleep Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
