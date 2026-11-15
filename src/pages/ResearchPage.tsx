import { AlertCircle, ClipboardList, Users } from 'lucide-react';
import {
  SURVEY_CHARTS,
  SURVEY_LIMITATIONS,
  SURVEY_OVERVIEW,
  TEAM_OBSERVATION_FINDING,
} from '../data/survey';
import { RevealSection } from '../components/RevealSection';
import { SourceLabel } from '../components/SourceLabel';
import {
  BedtimeWaffleCard,
  SurveyChartCard,
} from '../components/research/SurveyChartCard';
import { navigateToRoute } from '../utils/router';

export function ResearchPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#302044] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SourceLabel
            source="Our survey data"
            className="text-[#E9C75B] [&_svg]:text-[#E9C75B]"
          />
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            What Did Our Community Tell Us?
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            To understand real sleeping habits around us, our team conducted an initial questionnaire with students and community members. Every block below is clearly labeled to separate our survey numbers, scientific guidelines, and our team&apos;s observations.
          </p>
        </div>
      </section>

      {/* Top Dashboard Summary Row */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[#302044]/12 bg-white p-6 shadow-sm">
              <SourceLabel source={SURVEY_OVERVIEW.sourceLabel} />
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#302044] text-[#E9C75B]">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#29242F]/70">Total Respondents</p>
                  <p className="font-serif text-3xl font-bold text-[#302044] tabular-nums">
                    {SURVEY_OVERVIEW.totalRespondents}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#29242F]/80">
                {SURVEY_OVERVIEW.collectionContext}
              </p>
            </div>

            <div className="rounded-2xl border border-[#302044]/12 bg-[#E9C75B] p-6 text-[#29242F]">
              <SourceLabel source="Our survey data" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#302044]">
                Main Teen Age Group
              </p>
              <p className="mt-1 font-serif text-3xl font-bold text-[#29242F] tabular-nums">
                73.4%
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#29242F]/90">
                33 of 45 respondents were aged 14 (37.8%) or 15 (35.6%), matching secondary school age.
              </p>
            </div>

            <div className="rounded-2xl border border-[#302044]/12 bg-[#C994A8] p-6 text-[#29242F]">
              <SourceLabel source="Our survey data" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#302044]">
                11 PM – 12 AM Bedtime
              </p>
              <p className="mt-1 font-serif text-3xl font-bold text-[#29242F] tabular-nums">
                40%
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#29242F]/90">
                About 18 of 45 respondents reported going to bed between 11:00 PM and midnight.
              </p>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Main Charts: Finding 1 & Finding 2 */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {SURVEY_CHARTS.map((dataset) => (
              <SurveyChartCard key={dataset.id} dataset={dataset} />
            ))}
            <BedtimeWaffleCard />
          </div>
        </section>
      </RevealSection>

      {/* Finding 3: Self-Report vs Observation + Scientific Context */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <article className="lg:col-span-7 rounded-2xl border border-[#302044]/12 bg-white p-6 sm:p-8 shadow-sm">
              <SourceLabel source={TEAM_OBSERVATION_FINDING.sourceLabel} />
              <h2 className="mt-2 font-serif text-2xl font-bold text-[#302044]">
                {TEAM_OBSERVATION_FINDING.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#29242F]">
                {TEAM_OBSERVATION_FINDING.body}
              </p>
              <div className="mt-4 rounded-xl bg-[#F2E9D9] p-4 text-sm leading-relaxed text-[#29242F]/90">
                {TEAM_OBSERVATION_FINDING.explanation}
              </div>
            </article>

            <article className="lg:col-span-5 rounded-2xl bg-[#302044] p-6 sm:p-8 text-white flex flex-col justify-between">
              <div>
                <SourceLabel
                  source="Scientific information (external source)"
                  className="text-[#E9C75B] [&_svg]:text-[#E9C75B]"
                />
                <h2 className="mt-2 font-serif text-2xl font-bold text-white">
                  Putting Bedtime Windows in Context
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Public health guidelines recommend <strong>8–10 hours of sleep</strong> per 24 hours for teens aged 13–18. If a student falls asleep around 11:30 PM and wakes up at 6:00 AM for school, that leaves about 6.5 hours—well below the recommended range.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#/guide"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToRoute('guide');
                  }}
                  className="inline-flex min-h-[44px] items-center rounded-lg bg-[#E9C75B] px-4 py-2 text-sm font-semibold text-[#29242F] transition-colors hover:bg-[#dfb944]"
                >
                  Explore Practical Routine Tips
                </a>
              </div>
            </article>
          </div>
        </section>
      </RevealSection>

      {/* Limitations Section */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#302044]/15 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#302044]/10 pb-4">
              <div>
                <SourceLabel source={SURVEY_LIMITATIONS.sourceLabel} />
                <h2 className="mt-1.5 font-serif text-2xl font-bold text-[#302044]">
                  {SURVEY_LIMITATIONS.title}
                </h2>
              </div>
              <ClipboardList className="h-6 w-6 text-[#302044]/70" aria-hidden="true" />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#29242F]/85">
              {SURVEY_LIMITATIONS.intro}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SURVEY_LIMITATIONS.items.map((item) => (
                <div
                  key={item.heading}
                  className="flex items-start gap-3 rounded-xl bg-[#F2E9D9]/65 p-4"
                >
                  <AlertCircle className="h-5 w-5 text-[#302044] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold text-[#302044]">{item.heading}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#29242F]/85">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
