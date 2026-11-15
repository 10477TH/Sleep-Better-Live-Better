import { GraduationCap, School, Target } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/projectConfig';
import { RevealSection } from '../components/RevealSection';
import { navigateToRoute } from '../utils/router';

const PROJECT_OBJECTIVES = [
  {
    number: '01',
    title: 'Increase Sleep Awareness',
    description:
      'Increase awareness of the importance of getting sufficient, quality sleep every night.',
  },
  {
    number: '02',
    title: 'Educate on Well-Being Effects',
    description:
      'Educate students, parents, and community members about the effects of insufficient sleep on physical and mental well-being.',
  },
  {
    number: '03',
    title: 'Investigate Local Habits',
    description:
      'Investigate students’ sleeping habits thoughtfully through community questionnaires.',
  },
  {
    number: '04',
    title: 'Encourage Healthier Routines',
    description:
      'Encourage practical, healthier daily sleeping habits that fit realistically into student life.',
  },
  {
    number: '05',
    title: 'Share Reliable Health Information',
    description:
      'Share reliable, understandable, and evidence-grounded health information with the wider community.',
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#302044] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E9C75B]">
            About the Initiative
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            Why We Started This Project
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            {PROJECT_CONFIG.projectName} was created by three M.3 students who noticed how often sleep gets pushed aside in busy school routines—and wanted to turn reliable sleep science into practical community awareness.
          </p>
        </div>
      </section>

      {/* Background Narrative */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 rounded-2xl border border-[#302044]/10 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#302044] sm:text-3xl">
                Our Project Background
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-[#29242F]/90">
                <p>
                  Sleep is essential for healthy development, yet many students struggle to maintain healthy sleeping habits because of academic responsibilities, late-night screen time, entertainment, and irregular daily routines.
                </p>
                <p>
                  When sleep falls short, it can affect concentration, memory, emotional regulation, classroom learning, and overall health. Even though most people know that sleep matters in theory, it is not always easy to see how everyday habits—like staying on a phone late at night or shifting bedtimes on weekends—quietly shape how we feel and learn.
                </p>
                <p>
                  Our team started this project to bridge that gap: raising awareness, sharing accessible science in clear language, and encouraging realistic habits that help students and families live better.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl bg-[#E9C75B] p-6 text-[#29242F]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#302044]">
                  Core Message
                </p>
                <p className="mt-2 font-serif text-2xl font-bold leading-snug text-[#29242F]">
                  &ldquo;Sleep is not wasted time. It is an essential investment in our health, learning, and everyday lives.&rdquo;
                </p>
              </div>

              <div className="rounded-2xl border border-[#302044]/12 bg-white p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <School className="h-5 w-5 text-[#302044] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#29242F]/65">
                      School
                    </p>
                    <p className="text-sm font-semibold text-[#302044]">
                      {PROJECT_CONFIG.schoolName}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-[#302044]/10 pt-3">
                  <GraduationCap className="h-5 w-5 text-[#302044] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#29242F]/65">
                      Teacher Advisor
                    </p>
                    <p className="text-sm font-semibold text-[#302044]">
                      {PROJECT_CONFIG.teacherAdvisor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Project Objectives */}
      <RevealSection>
        <section className="border-y border-[#302044]/10 bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
              <Target className="h-4 w-4 text-[#302044]" aria-hidden="true" />
              <span>Project Goals</span>
            </div>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#302044]">
              Our Five Objectives
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECT_OBJECTIVES.map((obj) => (
                <article
                  key={obj.number}
                  className="rounded-2xl border border-[#302044]/12 bg-[#F2E9D9]/55 p-6"
                >
                  <span className="font-serif text-3xl font-bold text-[#302044] tabular-nums">
                    {obj.number}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-[#302044]">
                    {obj.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#29242F]/85">
                    {obj.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Our Team */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
              M.3 Project Team
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-[#302044]">
              Our Team
            </h2>
            <p className="mt-2 text-base leading-relaxed text-[#29242F]/85">
              A student-led project by three M.3 students.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {PROJECT_CONFIG.teamMembers.map((member) => (
              <article
                key={member.id}
                className="flex flex-col items-center justify-center rounded-2xl border border-[#302044]/12 bg-white px-6 py-8 text-center shadow-sm"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full font-serif text-2xl font-bold ring-4 ring-[#F2E9D9]"
                  style={{
                    backgroundColor: member.avatarBg,
                    color: member.avatarText,
                  }}
                  aria-hidden="true"
                >
                  {member.initial}
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#302044]">
                  {member.name}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#/research"
              onClick={(e) => {
                e.preventDefault();
                navigateToRoute('research');
              }}
              className="inline-flex min-h-[44px] items-center rounded-lg bg-[#302044] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3f2c58]"
            >
              See Our Research Findings
            </a>
            <a
              href="#/journey"
              onClick={(e) => {
                e.preventDefault();
                navigateToRoute('journey');
              }}
              className="inline-flex min-h-[44px] items-center rounded-lg bg-[#C994A8] px-5 py-2.5 text-sm font-semibold text-[#29242F] transition-colors hover:bg-[#bc8399]"
            >
              Read Our Project Journey
            </a>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
