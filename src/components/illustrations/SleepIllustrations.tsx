export function HeroMoonHorizonSvg() {
  const tickAngles = Array.from({ length: 24 }, (_, idx) => idx * 15);
  return (
    <svg
      viewBox="0 0 480 420"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of a large crescent moon, stars, and soft circadian-style rings representing healthy sleep cycles"
    >
      <rect width="480" height="420" rx="24" fill="#271938" />

      {/* Soft circadian-style concentric rings */}
      <circle
        cx="240"
        cy="192"
        r="158"
        fill="none"
        stroke="#F2E9D9"
        strokeOpacity="0.1"
        strokeWidth="1.2"
      />
      <circle
        cx="240"
        cy="192"
        r="134"
        fill="none"
        stroke="#C994A8"
        strokeOpacity="0.28"
        strokeWidth="1.5"
        strokeDasharray="6 8"
      />
      <circle
        cx="240"
        cy="192"
        r="108"
        fill="none"
        stroke="#E9C75B"
        strokeOpacity="0.32"
        strokeWidth="1.5"
      />
      <circle
        cx="240"
        cy="192"
        r="82"
        fill="#302044"
        fillOpacity="0.85"
      />

      {/* 24-hour circadian tick marks around outer ring */}
      {tickAngles.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const rInner = deg % 90 === 0 ? 148 : 153;
        const rOuter = 162;
        const x1 = 240 + rInner * Math.cos(rad);
        const y1 = 192 + rInner * Math.sin(rad);
        const x2 = 240 + rOuter * Math.cos(rad);
        const y2 = 192 + rOuter * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={deg % 90 === 0 ? '#E9C75B' : '#F2E9D9'}
            strokeOpacity={deg % 90 === 0 ? 0.65 : 0.25}
            strokeWidth={deg % 90 === 0 ? 2 : 1}
            strokeLinecap="round"
          />
        );
      })}

      {/* Circadian highlight arc */}
      <path
        d="M 106 192 A 134 134 0 0 1 320 84"
        fill="none"
        stroke="#E9C75B"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Stars */}
      <circle cx="88" cy="82" r="2.5" fill="#E9C75B" />
      <circle cx="394" cy="96" r="2.8" fill="#E9C75B" />
      <circle cx="114" cy="272" r="2.2" fill="#C994A8" />
      <circle cx="368" cy="264" r="2.4" fill="#F2E9D9" fillOpacity="0.75" />
      <circle cx="164" cy="64" r="1.8" fill="#F2E9D9" fillOpacity="0.6" />
      <circle cx="322" cy="306" r="1.8" fill="#C994A8" fillOpacity="0.85" />
      <path
        d="M366 72 L369 80 L377 83 L369 86 L366 94 L363 86 L355 83 L363 80 Z"
        fill="#E9C75B"
      />
      <path
        d="M110 132 L112.5 138.5 L119 141 L112.5 143.5 L110 150 L107.5 143.5 L101 141 L107.5 138.5 Z"
        fill="#F2E9D9"
        fillOpacity="0.88"
      />
      <path
        d="M388 188 L390 193 L395 195 L390 197 L388 202 L386 197 L381 195 L386 193 Z"
        fill="#C994A8"
      />

      {/* Large Crescent Moon */}
      <path
        d="M266 116 A74 74 0 1 0 322 238 A59 59 0 1 1 266 116 Z"
        fill="#E9C75B"
      />

      {/* Gentle sleep wave curves at bottom */}
      <path
        d="M0 322 Q120 292 240 322 T480 322 L480 420 L0 420 Z"
        fill="#C994A8"
        fillOpacity="0.22"
      />
      <path
        d="M0 348 Q120 322 240 348 T480 348 L480 420 L0 420 Z"
        fill="#F2E9D9"
        fillOpacity="0.14"
      />
      <path
        d="M42 374 Q145 354 240 374 T438 374"
        fill="none"
        stroke="#E9C75B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />

      {/* Caption */}
      <text
        x="240"
        y="398"
        textAnchor="middle"
        fill="#F2E9D9"
        fontSize="11.5"
        fontFamily="Inter, sans-serif"
        letterSpacing="2"
        opacity="0.85"
      >
        CIRCADIAN RHYTHM · DEEP REST · RECOVERY
      </text>
    </svg>
  );
}

export function BrainSleepSvg() {
  return (
    <svg
      viewBox="0 0 320 220"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of a human brain with neural pathways active during memory consolidation"
    >
      <rect width="320" height="220" rx="16" fill="#F2E9D9" />
      {/* Brain left and right hemispheres stylized */}
      <g transform="translate(54, 34)">
        <path
          d="M104 22 C74 18, 46 34, 42 62 C26 68, 22 92, 34 108 C30 128, 48 148, 72 146 C84 156, 102 154, 108 142 L108 24 Z"
          fill="#302044"
        />
        <path
          d="M112 24 C142 18, 170 34, 174 62 C190 68, 194 92, 182 108 C186 128, 168 148, 144 146 C132 156, 118 154, 112 142 Z"
          fill="#4A3466"
        />
        {/* Neural connection arcs */}
        <path
          d="M62 66 Q84 52 98 72 M54 96 Q78 88 94 106 M70 124 Q88 118 100 130"
          fill="none"
          stroke="#E9C75B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M156 64 Q134 52 122 72 M164 96 Q140 88 124 106 M148 124 Q132 118 120 130"
          fill="none"
          stroke="#C994A8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Active synaptic nodes */}
        <circle cx="62" cy="66" r="3.5" fill="#E9C75B" />
        <circle cx="94" cy="106" r="3.5" fill="#E9C75B" />
        <circle cx="156" cy="64" r="3.5" fill="#C994A8" />
        <circle cx="124" cy="106" r="3.5" fill="#C994A8" />
        <circle cx="110" cy="48" r="4" fill="#F2E9D9" />
      </g>
      <text
        x="160"
        y="202"
        textAnchor="middle"
        fill="#302044"
        fontSize="11"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
      >
        Memory sorting &amp; neural maintenance during sleep
      </text>
    </svg>
  );
}

export function TeenSleepWindowSvg() {
  const hours = Array.from({ length: 12 }, (_, idx) => idx);
  return (
    <svg
      viewBox="0 0 460 120"
      className="w-full h-auto"
      role="img"
      aria-label="Visual scale showing 8 to 10 hours recommended sleep per 24 hours for teens aged 13 to 18"
    >
      <rect width="460" height="120" rx="14" fill="#302044" />
      <text
        x="24"
        y="30"
        fill="#F2E9D9"
        fontSize="12"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
      >
        Recommended Sleep Window for Teens (Ages 13–18): 8–10 Hours
      </text>
      {hours.map((h) => {
        const x = 24 + h * 35;
        const isRecommended = h >= 7 && h <= 9; // hours 8, 9, 10 (1-indexed)
        const isBaseline = h < 7;
        return (
          <g key={h}>
            <rect
              x={x}
              y={48}
              width={29}
              height={32}
              rx={6}
              fill={isRecommended ? '#E9C75B' : isBaseline ? '#C994A8' : '#FFFFFF'}
              fillOpacity={isRecommended ? 1 : isBaseline ? 0.85 : 0.16}
            />
            <text
              x={x + 14.5}
              y={68}
              textAnchor="middle"
              fill={isRecommended || isBaseline ? '#29242F' : '#FFFFFF'}
              fontSize="11"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              {h + 1}h
            </text>
          </g>
        );
      })}
      <text
        x="24"
        y="102"
        fill="#E9C75B"
        fontSize="11"
        fontFamily="Inter, sans-serif"
      >
        Gold blocks mark the 8–10 hour target zone per 24 hours
      </text>
    </svg>
  );
}
