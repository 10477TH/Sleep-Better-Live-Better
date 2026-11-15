import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { User } from 'lucide-react';
import { BEDTIME_FINDING, SurveyChartDataset } from '../../data/survey';
import { SourceLabel } from '../SourceLabel';

interface SurveyChartCardProps {
  dataset: SurveyChartDataset;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      percentage: number;
      count: number;
    };
  }>;
}

function AgeDonutTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-lg border border-[#302044]/15 bg-white px-3.5 py-2.5 text-xs shadow-md">
      <p className="font-semibold text-[#302044]">{item.name}</p>
      <p className="mt-0.5 text-[#29242F] tabular-nums">
        {item.percentage}% ({item.count} respondents)
      </p>
    </div>
  );
}

export function SurveyChartCard({ dataset }: SurveyChartCardProps) {
  return (
    <article className="rounded-2xl border border-[#302044]/12 bg-white p-6 shadow-sm">
      <SourceLabel source={dataset.sourceLabel} />
      <h3 className="mt-2 font-serif text-xl font-semibold text-[#302044]">
        {dataset.title}
      </h3>
      <p className="mt-1 text-sm text-[#29242F]/80">{dataset.subtitle}</p>

      <div className="mt-6 grid items-center gap-6 sm:grid-cols-12">
        <div className="sm:col-span-6 h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataset.data}
                dataKey="percentage"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={56}
                outerRadius={88}
                paddingAngle={3}
                stroke="#FFFFFF"
                strokeWidth={2}
              >
                {dataset.data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<AgeDonutTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="sm:col-span-6 space-y-3">
          {dataset.data.map((slice) => (
            <div
              key={slice.name}
              className="flex items-center justify-between rounded-xl bg-[#F2E9D9]/65 px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-3.5 w-3.5 rounded-sm shrink-0"
                  style={{ backgroundColor: slice.color }}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-[#29242F]">{slice.name}</span>
              </div>
              <div className="text-right tabular-nums">
                <span className="text-sm font-bold text-[#302044]">{slice.percentage}%</span>
                <span className="ml-1.5 text-xs text-[#29242F]/75">({slice.count})</span>
              </div>
            </div>
          ))}
          <p className="pt-1 text-xs leading-relaxed text-[#29242F]/75">
            Total sample: <strong className="tabular-nums text-[#302044]">{dataset.totalRespondents}</strong> respondents.
          </p>
        </div>
      </div>

      <p className="mt-5 border-t border-[#302044]/10 pt-4 text-sm leading-relaxed text-[#29242F]/85">
        {dataset.summaryNote}
      </p>
    </article>
  );
}

export function BedtimeWaffleCard() {
  const people = Array.from({ length: BEDTIME_FINDING.totalCount }, (_, i) => i);

  return (
    <article className="rounded-2xl border border-[#302044]/12 bg-white p-6 shadow-sm flex flex-col justify-between">
      <div>
        <SourceLabel source={BEDTIME_FINDING.sourceLabel} />
        <h3 className="mt-2 font-serif text-xl font-semibold text-[#302044]">
          Reported Bedtime Window
        </h3>
        <p className="mt-1 text-sm text-[#29242F]/80">
          Share of respondents going to bed between {BEDTIME_FINDING.windowLabel}
        </p>

        {/* Big clear stat */}
        <div className="mt-5 flex flex-wrap items-baseline gap-3 rounded-xl bg-[#302044] px-5 py-4 text-white">
          <span className="font-serif text-4xl font-bold text-[#E9C75B] tabular-nums">
            {BEDTIME_FINDING.percentage}%
          </span>
          <span className="text-sm text-white/90 tabular-nums">
            (about {BEDTIME_FINDING.highlightedCount} of {BEDTIME_FINDING.totalCount} respondents)
          </span>
        </div>

        {/* 45-person waffle grid */}
        <div className="mt-5">
          <div
            className="grid grid-cols-9 gap-1.5 sm:gap-2"
            role="img"
            aria-label={`${BEDTIME_FINDING.highlightedCount} out of ${BEDTIME_FINDING.totalCount} respondent icons highlighted representing ${BEDTIME_FINDING.percentage}%`}
          >
            {people.map((idx) => {
              const isHighlighted = idx < BEDTIME_FINDING.highlightedCount;
              return (
                <div
                  key={idx}
                  className={`flex h-7 items-center justify-center rounded-md ${
                    isHighlighted
                      ? 'bg-[#E9C75B] text-[#29242F]'
                      : 'bg-[#F2E9D9] text-[#302044]/40'
                  }`}
                >
                  <User className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              );
            })}
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-4 text-xs text-[#29242F]/80">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#E9C75B]" aria-hidden="true" />
              <span>Bedtime 11 PM – 12 AM (~{BEDTIME_FINDING.highlightedCount})</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#F2E9D9] border border-[#302044]/15" aria-hidden="true" />
              <span>Other reported bedtimes ({BEDTIME_FINDING.totalCount - BEDTIME_FINDING.highlightedCount})</span>
            </span>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-[#302044]/10 pt-4 text-sm leading-relaxed text-[#29242F]/85">
        {BEDTIME_FINDING.detail}
      </p>
    </article>
  );
}
