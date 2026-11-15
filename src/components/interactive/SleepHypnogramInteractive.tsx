import { useState } from 'react';
import { HYPNOGRAM_POINTS, SLEEP_STAGES, SleepStageInfo } from '../../data/scienceData';

export function SleepHypnogramInteractive() {
  const [selectedStageId, setSelectedStageId] = useState<SleepStageInfo['id']>('nrem3');

  const activeStage =
    SLEEP_STAGES.find((stage) => stage.id === selectedStageId) || SLEEP_STAGES[0];

  // SVG coordinate helpers for hypnogram
  const width = 620;
  const height = 220;
  const padLeft = 74;
  const padRight = 24;
  const padTop = 24;
  const padBottom = 38;
  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const yLevels = [
    { label: 'Awake', yValue: 4, stageId: 'wake' },
    { label: 'REM', yValue: 3, stageId: 'rem' },
    { label: 'NREM 1', yValue: 2, stageId: 'nrem1' },
    { label: 'NREM 2', yValue: 1, stageId: 'nrem2' },
    { label: 'NREM 3', yValue: 0, stageId: 'nrem3' },
  ];

  const getY = (val: number) => {
    const ratio = (4 - val) / 4;
    return padTop + ratio * plotH;
  };

  const getX = (idx: number) => {
    return padLeft + (idx / (HYPNOGRAM_POINTS.length - 1)) * plotW;
  };

  // Build stepped SVG path for classic hypnogram look
  const pathCommands = HYPNOGRAM_POINTS.map((pt, idx) => {
    const x = getX(idx);
    const y = getY(pt.yValue);
    if (idx === 0) return `M ${x} ${y}`;
    const prevY = getY(HYPNOGRAM_POINTS[idx - 1].yValue);
    return `L ${x} ${prevY} L ${x} ${y}`;
  }).join(' ');

  return (
    <div className="rounded-2xl border border-[#302044]/12 bg-white p-5 sm:p-7 shadow-sm">
      <div className="border-b border-[#302044]/10 pb-4">
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#302044]">
          Sleep Architecture: Sample Nightly Hypnogram
        </h3>
        <p className="mt-1 text-sm text-[#29242F]/80">
          Sleep moves through repeating cycles of NREM and REM sleep. Click any stage card below to highlight where it appears and see its role.
        </p>
      </div>

      {/* SVG Hypnogram Diagram */}
      <div className="mt-5 overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full min-w-[500px] h-auto"
          role="img"
          aria-label="Illustrative sleep hypnogram showing transitions between Awake, REM, NREM 1, NREM 2, and NREM 3 over an 8-hour night"
        >
          {/* Background horizontal bands */}
          {yLevels.map((lvl) => {
            const y = getY(lvl.yValue);
            const isHighlighted = lvl.stageId === selectedStageId;
            return (
              <g key={lvl.label}>
                <line
                  x1={padLeft}
                  y1={y}
                  x2={width - padRight}
                  y2={y}
                  stroke={isHighlighted ? '#E9C75B' : '#302044'}
                  strokeOpacity={isHighlighted ? 0.9 : 0.12}
                  strokeWidth={isHighlighted ? 3 : 1}
                  strokeDasharray={isHighlighted ? undefined : '4 4'}
                />
                <text
                  x={padLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  fill={isHighlighted ? '#302044' : '#29242F'}
                  fontSize="11"
                  fontWeight={isHighlighted ? '700' : '500'}
                  fontFamily="Inter, sans-serif"
                >
                  {lvl.label}
                </text>
              </g>
            );
          })}

          {/* Stepped hypnogram line */}
          <path
            d={pathCommands}
            fill="none"
            stroke="#302044"
            strokeWidth="2.75"
            strokeLinejoin="round"
          />

          {/* Interactive nodes for each stage */}
          {HYPNOGRAM_POINTS.map((pt, idx) => {
            const x = getX(idx);
            const y = getY(pt.yValue);
            const isMatch = pt.stageId === selectedStageId;
            return (
              <circle
                key={`${pt.hourLabel}-${idx}`}
                cx={x}
                cy={y}
                r={isMatch ? 5.5 : 3}
                fill={
                  pt.stageId === 'rem'
                    ? '#C994A8'
                    : pt.stageId === 'nrem3'
                    ? '#302044'
                    : isMatch
                    ? '#E9C75B'
                    : '#FFFFFF'
                }
                stroke="#302044"
                strokeWidth="1.5"
              />
            );
          })}

          {/* X-axis hour ticks */}
          {[0, 5, 10, 15, 20].map((idx) => {
            const pt = HYPNOGRAM_POINTS[idx];
            if (!pt) return null;
            return (
              <text
                key={pt.hourLabel}
                x={getX(idx)}
                y={height - 10}
                textAnchor="middle"
                fill="#29242F"
                fillOpacity="0.7"
                fontSize="11"
                fontFamily="Inter, sans-serif"
              >
                {pt.hourLabel}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Clickable Stage Selector Cards */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SLEEP_STAGES.map((stage) => {
          const isSelected = stage.id === selectedStageId;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setSelectedStageId(stage.id)}
              aria-pressed={isSelected}
              className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] ${
                isSelected
                  ? 'border-[#302044] bg-[#302044] text-white shadow-sm'
                  : 'border-[#302044]/12 bg-[#F2E9D9]/60 text-[#29242F] hover:bg-[#F2E9D9]'
              }`}
            >
              <span
                className="inline-block h-2.5 w-8 rounded-full mb-2.5"
                style={{ backgroundColor: stage.color === '#302044' && isSelected ? '#E9C75B' : stage.color }}
                aria-hidden="true"
              />
              <span className="font-serif text-base font-semibold">
                {stage.shortName}
              </span>
              <span
                className={`mt-1 text-xs ${
                  isSelected ? 'text-[#E9C75B]' : 'text-[#29242F]/75'
                }`}
              >
                {stage.typicalShare}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Details */}
      <div className="mt-5 rounded-xl bg-[#F2E9D9] p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="font-serif text-lg font-semibold text-[#302044]">
            {activeStage.name}
          </h4>
          <span className="text-xs font-medium text-[#302044]/80">
            {activeStage.typicalShare}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[#29242F]">
          {activeStage.overview}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-3.5">
            <p className="text-xs font-semibold text-[#302044]">Brain Activity</p>
            <p className="mt-1 text-xs leading-relaxed text-[#29242F]/85">
              {activeStage.brainActivity}
            </p>
          </div>
          <div className="rounded-lg bg-white p-3.5">
            <p className="text-xs font-semibold text-[#302044]">Physical Recovery</p>
            <p className="mt-1 text-xs leading-relaxed text-[#29242F]/85">
              {activeStage.physicalRecovery}
            </p>
          </div>
          <div className="rounded-lg bg-white p-3.5">
            <p className="text-xs font-semibold text-[#302044]">Memory &amp; Learning</p>
            <p className="mt-1 text-xs leading-relaxed text-[#29242F]/85">
              {activeStage.memoryRole}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-[#29242F]/75">
        Important context: Real sleep cycles vary from person to person and from night to night. This diagram illustrates a common general pattern rather than an identical nightly schedule.
      </p>
    </div>
  );
}
