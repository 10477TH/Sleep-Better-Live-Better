import { useState } from 'react';
import { Moon, Sun, Sunrise, Sunset } from 'lucide-react';
import { CIRCADIAN_HOURS, CircadianHourPoint } from '../../data/scienceData';

const PHASE_COLORS: Record<CircadianHourPoint['phase'], { bg: string; text: string; ring: string }> = {
  'Night Sleep': { bg: '#302044', text: '#FFFFFF', ring: '#E9C75B' },
  'Morning Wake': { bg: '#E9C75B', text: '#29242F', ring: '#302044' },
  'Daytime Focus': { bg: '#F2E9D9', text: '#29242F', ring: '#302044' },
  'Evening Wind-Down': { bg: '#C994A8', text: '#29242F', ring: '#302044' },
};

export function CircadianClockInteractive() {
  const [selectedHour, setSelectedHour] = useState<number>(22);

  const activePoint = CIRCADIAN_HOURS.find((h) => h.hour === selectedHour) || CIRCADIAN_HOURS[0];
  const centerX = 180;
  const centerY = 180;
  const radius = 132;

  const handleKeyDown = (e: React.KeyboardEvent, hour: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedHour((hour + 1) % 24);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedHour((hour + 23) % 24);
    }
  };

  const renderPhaseIcon = (phase: CircadianHourPoint['phase']) => {
    if (phase === 'Night Sleep') return <Moon className="h-4 w-4 text-[#E9C75B]" aria-hidden="true" />;
    if (phase === 'Morning Wake') return <Sunrise className="h-4 w-4 text-[#302044]" aria-hidden="true" />;
    if (phase === 'Daytime Focus') return <Sun className="h-4 w-4 text-[#302044]" aria-hidden="true" />;
    return <Sunset className="h-4 w-4 text-[#302044]" aria-hidden="true" />;
  };

  return (
    <div className="rounded-2xl border border-[#302044]/12 bg-white p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-[#302044]/10 pb-4">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#302044]">
            Interactive 24-Hour Circadian Clock
          </h3>
          <p className="mt-1 text-sm text-[#29242F]/80">
            Hover, tap, or use keyboard arrows on any hour around the clock to explore typical alertness, melatonin, and body temperature patterns.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2 sm:pt-0">
          {[
            { label: 'Morning (7 AM)', hour: 7 },
            { label: 'Peak Focus (10 AM)', hour: 10 },
            { label: 'Wind-Down (9 PM)', hour: 21 },
            { label: 'Deep Night (2 AM)', hour: 2 },
          ].map((preset) => (
            <button
              key={preset.hour}
              type="button"
              onClick={() => setSelectedHour(preset.hour)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] ${
                selectedHour === preset.hour
                  ? 'bg-[#302044] text-white'
                  : 'bg-[#F2E9D9] text-[#29242F] hover:bg-[#E9C75B]'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid items-center gap-8 lg:grid-cols-12">
        {/* Left: SVG 24-Hour Interactive Clock */}
        <div className="lg:col-span-6 flex justify-center">
          <svg
            viewBox="0 0 360 360"
            className="w-full max-w-[360px] h-auto select-none"
            role="group"
            aria-label="Interactive 24-hour circadian rhythm clock"
          >
            {/* Outer decorative ring */}
            <circle cx={centerX} cy={centerY} r={160} fill="#F2E9D9" fillOpacity="0.55" />
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#302044" strokeOpacity="0.16" strokeWidth="2" />

            {/* Night vs Day arc visual cues */}
            <path
              d="M 180 48 A 132 132 0 0 1 180 312"
              fill="none"
              stroke="#E9C75B"
              strokeWidth="6"
              strokeOpacity="0.35"
            />
            <path
              d="M 180 312 A 132 132 0 0 1 180 48"
              fill="none"
              stroke="#302044"
              strokeWidth="6"
              strokeOpacity="0.22"
            />

            {/* Center readout */}
            <circle cx={centerX} cy={centerY} r={76} fill="#302044" />
            <text
              x={centerX}
              y={centerY - 16}
              textAnchor="middle"
              fill="#E9C75B"
              fontSize="11"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              {activePoint.phase.toUpperCase()}
            </text>
            <text
              x={centerX}
              y={centerY + 12}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="22"
              fontWeight="700"
              fontFamily="Playfair Display, serif"
            >
              {activePoint.label}
            </text>
            <text
              x={centerX}
              y={centerY + 34}
              textAnchor="middle"
              fill="#F2E9D9"
              fontSize="11"
              fontFamily="Inter, sans-serif"
            >
              Alertness: {activePoint.alertness}%
            </text>

            {/* 24 Hour Interactive Nodes (00 at top, clockwise) */}
            {CIRCADIAN_HOURS.map((point) => {
              const angleRad = ((point.hour / 24) * 360 - 90) * (Math.PI / 180);
              const x = centerX + radius * Math.cos(angleRad);
              const y = centerY + radius * Math.sin(angleRad);
              const isSelected = point.hour === selectedHour;
              const phaseStyle = PHASE_COLORS[point.phase];

              return (
                <g
                  key={point.hour}
                  role="button"
                  tabIndex={0}
                  aria-label={`${point.label}, ${point.phase}, alertness ${point.alertness} percent`}
                  aria-pressed={isSelected}
                  onMouseEnter={() => setSelectedHour(point.hour)}
                  onFocus={() => setSelectedHour(point.hour)}
                  onClick={() => setSelectedHour(point.hour)}
                  onKeyDown={(e) => handleKeyDown(e, point.hour)}
                  className="cursor-pointer focus:outline-none"
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 17 : 13.5}
                    fill={isSelected ? '#E9C75B' : phaseStyle.bg}
                    stroke={isSelected ? '#302044' : '#302044'}
                    strokeOpacity={isSelected ? 1 : 0.25}
                    strokeWidth={isSelected ? 2.5 : 1}
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fill={isSelected ? '#29242F' : phaseStyle.text}
                    fontSize={isSelected ? '11' : '9.5'}
                    fontWeight={isSelected ? '700' : '600'}
                    fontFamily="Inter, sans-serif"
                    pointerEvents="none"
                  >
                    {point.shortLabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right: Selected Hour Breakdown */}
        <div className="lg:col-span-6 space-y-5">
          <div className="rounded-xl bg-[#F2E9D9] p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {renderPhaseIcon(activePoint.phase)}
                <span className="text-xs font-semibold uppercase tracking-wider text-[#302044]">
                  {activePoint.phase}
                </span>
              </div>
              <span className="font-serif text-xl font-bold text-[#302044] tabular-nums">
                {activePoint.label}
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#29242F]">
              {activePoint.summary}
            </p>

            {/* Alertness bar */}
            <div className="mt-5 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-medium text-[#29242F]">
                <span>Typical Alertness Level</span>
                <span className="font-semibold tabular-nums">{activePoint.alertness}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-[#302044] transition-all duration-200"
                  style={{ width: `${activePoint.alertness}%` }}
                />
              </div>
            </div>

            {/* Melatonin & Temperature */}
            <div className="mt-4 grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-lg bg-white p-3">
                <p className="text-xs text-[#29242F]/70">Melatonin Signal</p>
                <p className="mt-0.5 text-sm font-semibold text-[#302044]">
                  {activePoint.melatonin}
                </p>
              </div>
              <div className="rounded-lg bg-white p-3">
                <p className="text-xs text-[#29242F]/70">Body Temperature</p>
                <p className="mt-0.5 text-sm font-semibold text-[#302044]">
                  {activePoint.bodyTemp}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#302044]/12 bg-white p-4 text-xs leading-relaxed text-[#29242F]/85">
            <strong className="text-[#302044]">Note on individual variation:</strong> This 24-hour pattern shows a general biological rhythm, not an exact timetable for every person. Age (especially adolescence), light exposure, and daily schedules can shift individual timing earlier or later.
          </div>
        </div>
      </div>
    </div>
  );
}
