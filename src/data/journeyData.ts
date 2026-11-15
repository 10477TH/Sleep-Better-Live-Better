export interface JourneyMilestone {
  step: string;
  phase: string;
  title: string;
  summary: string;
  details: string[];
}

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    step: '01',
    phase: 'Community Listening',
    title: 'Student & Community Sleep Questionnaire',
    summary:
      'We designed and shared a questionnaire to understand real sleeping schedules, screen habits, and daytime feelings among peers and community members.',
    details: [
      'Collected 45 responses, largely from 14- and 15-year-old students alongside other age groups.',
      'Observed that 40% of respondents reported going to bed between 11:00 PM and 12:00 AM.',
      'Noted differences between self-reported concentration and everyday classroom observations.',
    ],
  },
  {
    step: '02',
    phase: 'Science Translation',
    title: 'Research & Educational Content Creation',
    summary:
      'We studied trusted public-health resources on circadian biology, sleep stages, caffeine, and teen sleep needs, translating technical concepts into clear everyday English.',
    details: [
      'Cross-checked scientific explanations against reliable health agencies (CDC, AASM, NIH/NHLBI, NIGMS).',
      'Separated our own survey findings, scientific facts, and team observations clearly so readers know where each idea comes from.',
    ],
  },
  {
    step: '03',
    phase: 'Digital Outreach',
    title: 'Educational Video Production',
    summary:
      'We created an educational video to share key sleep messages visually—and discovered firsthand that online reach requires active distribution, not just good content.',
    details: [
      'Scripted and produced short, relatable explanations designed for secondary students.',
      'Learned that reaching a wider audience online was more challenging than we expected.',
    ],
  },
  {
    step: '04',
    phase: 'Live Impact',
    title: 'Community Presentation at School Event',
    summary:
      'We planned an in-person community presentation for an expected audience of roughly 30–50 people, including students, parents, and adults.',
    details: [
      'Focused on making sleep science understandable, memorable, and relatable for both teenagers and families.',
      'Built this interactive website so attendees and anyone in the community can explore the science, data, and bedtime tools anytime.',
    ],
  },
];

export interface ProjectChallenge {
  id: string;
  title: string;
  category: string;
  description: string;
  takeaway: string;
}

export const PROJECT_CHALLENGES: ProjectChallenge[] = [
  {
    id: 'survey-participation',
    title: 'Limited Survey Participation',
    category: 'Data Collection',
    description:
      'Receiving 45 responses gave us a meaningful starting snapshot, but a sample of this size limits how broadly our numbers represent the whole school or community.',
    takeaway: 'We present our data honestly as an initial snapshot rather than overclaiming.',
  },
  {
    id: 'video-reach',
    title: 'Limited Video Reach',
    category: 'Public Outreach',
    description:
      'Even after putting effort into our educational video, it did not reach as many viewers as we originally hoped.',
    takeaway: 'Good information needs clear distribution pathways—like live events and shareable web guides.',
  },
  {
    id: 'research-limitations',
    title: 'Research Limitations',
    category: 'Self-Report vs. Reality',
    description:
      'Some self-reported questionnaire answers (such as rating concentration as normal) did not fully match what our team observed in everyday student routines.',
    takeaway: 'Self-report surveys capture perception, which should be paired with careful context.',
  },
];

export const TEAM_LEARNINGS = [
  {
    title: 'Research & Data Analysis',
    detail:
      'How to collect survey responses responsibly, summarize real numbers accurately, and state limitations without exaggerating conclusions.',
  },
  {
    title: 'Communication & Presentation',
    detail:
      'Turning biological concepts like melatonin, adenosine, and REM cycles into clear explanations for students, parents, and teachers.',
  },
  {
    title: 'Teamwork',
    detail:
      'Coordinating research, writing, design, video work, and event planning across a three-person M.3 student team.',
  },
  {
    title: 'Problem-Solving',
    detail:
      'Adapting when video reach fell short by expanding into live school presentations and an accessible educational website.',
  },
  {
    title: 'Personal Sleep Health',
    detail:
      'Building a deeper respect for how our own bedtimes, screens, and schedules shape focus, mood, and daily energy.',
  },
];

export interface ReferenceItem {
  id: string;
  organization: string;
  title: string;
  url: string;
  domainLabel: string;
  scope: string;
  tier: 'Primary Public Health & Scientific Reference' | 'Supplementary Educational Reference';
}

export const REFERENCES_LIST: ReferenceItem[] = [
  {
    id: 'cdc-sleep',
    organization: 'Centers for Disease Control and Prevention (CDC)',
    title: 'CDC — Sleep and Sleep Disorders',
    url: 'https://www.cdc.gov/sleep/',
    domainLabel: 'cdc.gov/sleep',
    scope: 'Public health statistics, sleep duration recommendations by age, and healthy sleep habits.',
    tier: 'Primary Public Health & Scientific Reference',
  },
  {
    id: 'aasm-sleepeducation',
    organization: 'American Academy of Sleep Medicine (AASM)',
    title: 'Sleep Education — Healthy Sleep Resources',
    url: 'https://sleepeducation.org/',
    domainLabel: 'sleepeducation.org',
    scope: 'Teen sleep duration guidance (8–10 hours for ages 13–18), sleep stages, and sleep hygiene education.',
    tier: 'Primary Public Health & Scientific Reference',
  },
  {
    id: 'nhlbi',
    organization: 'National Heart, Lung, and Blood Institute (NIH / NHLBI)',
    title: 'NHLBI — Sleep Science & Health Information',
    url: 'https://www.nhlbi.nih.gov/',
    domainLabel: 'nhlbi.nih.gov',
    scope: 'How sleep supports brain function, physical health, immune function, and consequences of sleep deficiency.',
    tier: 'Primary Public Health & Scientific Reference',
  },
  {
    id: 'nigms',
    organization: 'National Institute of General Medical Sciences (NIH / NIGMS)',
    title: 'NIGMS — Circadian Rhythms Fact Sheet',
    url: 'https://www.nigms.nih.gov/',
    domainLabel: 'nigms.nih.gov',
    scope: 'Internal 24-hour biological clocks, light cues, melatonin regulation, and circadian biology.',
    tier: 'Primary Public Health & Scientific Reference',
  },
  {
    id: 'sleep-foundation',
    organization: 'Sleep Foundation',
    title: 'Sleep Foundation — Educational Library (Supplementary)',
    url: 'https://www.sleepfoundation.org/',
    domainLabel: 'sleepfoundation.org',
    scope: 'Supplementary plain-language explanations of sleep routines, caffeine timing, and napping habits.',
    tier: 'Supplementary Educational Reference',
  },
];
