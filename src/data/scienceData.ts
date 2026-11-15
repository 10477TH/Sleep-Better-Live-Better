export interface CircadianHourPoint {
  hour: number;
  label: string;
  shortLabel: string;
  phase: 'Night Sleep' | 'Morning Wake' | 'Daytime Focus' | 'Evening Wind-Down';
  alertness: number; // 0-100 illustrative relative curve
  melatonin: 'Very Low' | 'Low' | 'Rising' | 'High' | 'Declining';
  bodyTemp: string;
  summary: string;
}

export const CIRCADIAN_HOURS: CircadianHourPoint[] = [
  {
    hour: 0,
    label: '12:00 AM',
    shortLabel: '00',
    phase: 'Night Sleep',
    alertness: 18,
    melatonin: 'High',
    bodyTemp: 'Dropping',
    summary: 'Melatonin levels are elevated, signaling to the body that it is nighttime and supporting sleep.',
  },
  {
    hour: 1,
    label: '1:00 AM',
    shortLabel: '01',
    phase: 'Night Sleep',
    alertness: 14,
    melatonin: 'High',
    bodyTemp: 'Low',
    summary: 'Core body temperature continues to dip as deep restorative sleep commonly takes place.',
  },
  {
    hour: 2,
    label: '2:00 AM',
    shortLabel: '02',
    phase: 'Night Sleep',
    alertness: 10,
    melatonin: 'High',
    bodyTemp: 'Near Lowest',
    summary: 'Deep sleep phases and ongoing nervous system recovery occur during the quiet night hours.',
  },
  {
    hour: 3,
    label: '3:00 AM',
    shortLabel: '03',
    phase: 'Night Sleep',
    alertness: 8,
    melatonin: 'High',
    bodyTemp: 'Lowest Point',
    summary: 'Core body temperature typically reaches its daily low point in the early pre-dawn hours.',
  },
  {
    hour: 4,
    label: '4:00 AM',
    shortLabel: '04',
    phase: 'Night Sleep',
    alertness: 12,
    melatonin: 'High',
    bodyTemp: 'Low',
    summary: 'REM sleep episodes often lengthen during the second half of the night.',
  },
  {
    hour: 5,
    label: '5:00 AM',
    shortLabel: '05',
    phase: 'Night Sleep',
    alertness: 20,
    melatonin: 'Declining',
    bodyTemp: 'Starting to Rise',
    summary: 'Body temperature begins rising gradually as the brain prepares for eventual waking.',
  },
  {
    hour: 6,
    label: '6:00 AM',
    shortLabel: '06',
    phase: 'Morning Wake',
    alertness: 38,
    melatonin: 'Declining',
    bodyTemp: 'Rising',
    summary: 'Melatonin secretion slows down as morning approaches; waking early can still feel groggy for teens.',
  },
  {
    hour: 7,
    label: '7:00 AM',
    shortLabel: '07',
    phase: 'Morning Wake',
    alertness: 55,
    melatonin: 'Low',
    bodyTemp: 'Rising',
    summary: 'Morning daylight helps shut off melatonin and resets the internal clock for the new day.',
  },
  {
    hour: 8,
    label: '8:00 AM',
    shortLabel: '08',
    phase: 'Morning Wake',
    alertness: 68,
    melatonin: 'Very Low',
    bodyTemp: 'Warming',
    summary: 'Melatonin stops; natural alertness builds steadily after exposure to light and movement.',
  },
  {
    hour: 9,
    label: '9:00 AM',
    shortLabel: '09',
    phase: 'Daytime Focus',
    alertness: 78,
    melatonin: 'Very Low',
    bodyTemp: 'Moderate',
    summary: 'Alertness rises strongly, supporting classroom learning, problem-solving, and memory recall.',
  },
  {
    hour: 10,
    label: '10:00 AM',
    shortLabel: '10',
    phase: 'Daytime Focus',
    alertness: 88,
    melatonin: 'Very Low',
    bodyTemp: 'Moderate',
    summary: 'Often one of the highest alertness windows of the morning for focused study.',
  },
  {
    hour: 11,
    label: '11:00 AM',
    shortLabel: '11',
    phase: 'Daytime Focus',
    alertness: 86,
    melatonin: 'Very Low',
    bodyTemp: 'Moderate',
    summary: 'Sustained daytime wakefulness continues before midday meal and afternoon shifts.',
  },
  {
    hour: 12,
    label: '12:00 PM',
    shortLabel: '12',
    phase: 'Daytime Focus',
    alertness: 76,
    melatonin: 'Very Low',
    bodyTemp: 'Warm',
    summary: 'Midday transition; staying hydrated and getting natural light helps maintain steady energy.',
  },
  {
    hour: 13,
    label: '1:00 PM',
    shortLabel: '13',
    phase: 'Daytime Focus',
    alertness: 64,
    melatonin: 'Very Low',
    bodyTemp: 'Warm',
    summary: 'A mild early-afternoon dip in alertness is a normal biological feature of the circadian rhythm.',
  },
  {
    hour: 14,
    label: '2:00 PM',
    shortLabel: '14',
    phase: 'Daytime Focus',
    alertness: 60,
    melatonin: 'Very Low',
    bodyTemp: 'Warm',
    summary: 'Many people feel a temporary post-lunch lull; short movement breaks or short early naps can help.',
  },
  {
    hour: 15,
    label: '3:00 PM',
    shortLabel: '15',
    phase: 'Daytime Focus',
    alertness: 70,
    melatonin: 'Very Low',
    bodyTemp: 'Rising',
    summary: 'Alertness rebounds in the mid-afternoon, often supporting coordination and physical activity.',
  },
  {
    hour: 16,
    label: '4:00 PM',
    shortLabel: '16',
    phase: 'Daytime Focus',
    alertness: 80,
    melatonin: 'Very Low',
    bodyTemp: 'High',
    summary: 'Muscle warmth and reaction speed are typically strong in late afternoon.',
  },
  {
    hour: 17,
    label: '5:00 PM',
    shortLabel: '17',
    phase: 'Daytime Focus',
    alertness: 82,
    melatonin: 'Very Low',
    bodyTemp: 'Peak Window',
    summary: 'Body temperature nears its daily peak; a good time for exercise well before bedtime.',
  },
  {
    hour: 18,
    label: '6:00 PM',
    shortLabel: '18',
    phase: 'Evening Wind-Down',
    alertness: 74,
    melatonin: 'Low',
    bodyTemp: 'Peak / Plateau',
    summary: 'Daylight fades and the brain begins transitioning toward evening cues.',
  },
  {
    hour: 19,
    label: '7:00 PM',
    shortLabel: '19',
    phase: 'Evening Wind-Down',
    alertness: 62,
    melatonin: 'Low',
    bodyTemp: 'Cooling Begins',
    summary: 'Body temperature starts its evening decline; bright artificial light can delay the upcoming sleep signal.',
  },
  {
    hour: 20,
    label: '8:00 PM',
    shortLabel: '20',
    phase: 'Evening Wind-Down',
    alertness: 50,
    melatonin: 'Rising',
    bodyTemp: 'Cooling',
    summary: 'Dimming indoor lights helps the brain start releasing melatonin naturally.',
  },
  {
    hour: 21,
    label: '9:00 PM',
    shortLabel: '21',
    phase: 'Evening Wind-Down',
    alertness: 38,
    melatonin: 'Rising',
    bodyTemp: 'Cooling',
    summary: 'Melatonin typically begins rising in the evening (often slightly later in teenagers due to puberty shifts).',
  },
  {
    hour: 22,
    label: '10:00 PM',
    shortLabel: '22',
    phase: 'Evening Wind-Down',
    alertness: 28,
    melatonin: 'Rising',
    bodyTemp: 'Dropping',
    summary: 'Sleepiness increases as sleep pressure and melatonin work together—an ideal window to begin winding down.',
  },
  {
    hour: 23,
    label: '11:00 PM',
    shortLabel: '23',
    phase: 'Night Sleep',
    alertness: 20,
    melatonin: 'High',
    bodyTemp: 'Dropping',
    summary: 'Nighttime rest mode: screens and bright overhead lights at this hour can suppress melatonin.',
  },
];

export interface SleepStageInfo {
  id: 'nrem1' | 'nrem2' | 'nrem3' | 'rem';
  name: string;
  shortName: string;
  depthLevel: number; // 1 = shallowest, 4 = deepest for visual clarity
  typicalShare: string;
  color: string;
  textColor: string;
  brainActivity: string;
  physicalRecovery: string;
  memoryRole: string;
  overview: string;
}

export const SLEEP_STAGES: SleepStageInfo[] = [
  {
    id: 'nrem1',
    name: 'NREM Stage 1 — Light Transition',
    shortName: 'NREM 1',
    depthLevel: 1,
    typicalShare: 'Brief transition (a few minutes)',
    color: '#E9C75B',
    textColor: '#29242F',
    brainActivity: 'Brain waves slow down from active wakefulness into relaxed theta-like rhythms.',
    physicalRecovery: 'Breathing and heartbeat begin to slow; muscles start relaxing.',
    memoryRole: 'Acts as the gateway shifting the brain from external focus to internal rest.',
    overview:
      'The shortest stage right after falling asleep. You can still be woken up easily by sounds or movement.',
  },
  {
    id: 'nrem2',
    name: 'NREM Stage 2 — Steady Light Sleep',
    shortName: 'NREM 2',
    depthLevel: 2,
    typicalShare: 'Largest share of the night (~45–55%)',
    color: '#C994A8',
    textColor: '#29242F',
    brainActivity: 'Features brief bursts of activity called sleep spindles and K-complexes.',
    physicalRecovery: 'Heart rate slows further and core body temperature drops.',
    memoryRole: 'Sleep spindles help protect sleep from noise and assist with organizing new skills and facts.',
    overview:
      'True sleep begins here. You spend more total time in Stage 2 over a full night than in any other stage.',
  },
  {
    id: 'nrem3',
    name: 'NREM Stage 3 — Deep Slow-Wave Sleep',
    shortName: 'NREM 3',
    depthLevel: 3,
    typicalShare: 'Prominent early in the night',
    color: '#302044',
    textColor: '#FFFFFF',
    brainActivity: 'Slow, synchronized delta brain waves dominate; very hard to wake up from this stage.',
    physicalRecovery: 'Key stage for tissue repair, immune system support, and release of growth hormones.',
    memoryRole: 'Helps stabilize newly learned facts and declarative memories.',
    overview:
      'Deep restorative sleep. Getting enough NREM 3 helps you feel physically refreshed the next morning.',
  },
  {
    id: 'rem',
    name: 'REM Sleep — Rapid Eye Movement',
    shortName: 'REM',
    depthLevel: 4,
    typicalShare: 'Longer episodes toward morning',
    color: '#5B4478',
    textColor: '#FFFFFF',
    brainActivity: 'Brain activity looks surprisingly similar to being awake; vivid dreaming commonly occurs.',
    physicalRecovery: 'Voluntary muscles temporarily relax deeply while eyes move quickly beneath closed lids.',
    memoryRole: 'Supports emotional processing, creativity, and integrating complex memories.',
    overview:
      'Happens in cycles throughout the night, with longer REM periods in the final hours before waking—one reason cutting sleep short hurts REM.',
  },
];

export interface HypnogramPoint {
  hourLabel: string;
  stage: 'Awake' | 'REM' | 'NREM 1' | 'NREM 2' | 'NREM 3';
  yValue: number; // 4 = Awake, 3 = REM, 2 = NREM 1, 1 = NREM 2, 0 = NREM 3
  stageId: 'wake' | 'rem' | 'nrem1' | 'nrem2' | 'nrem3';
}

export const HYPNOGRAM_POINTS: HypnogramPoint[] = [
  { hourLabel: '0h', stage: 'Awake', yValue: 4, stageId: 'wake' },
  { hourLabel: '0.3h', stage: 'NREM 1', yValue: 2, stageId: 'nrem1' },
  { hourLabel: '0.6h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '1.0h', stage: 'NREM 3', yValue: 0, stageId: 'nrem3' },
  { hourLabel: '1.3h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '1.5h', stage: 'REM', yValue: 3, stageId: 'rem' },
  { hourLabel: '1.8h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '2.3h', stage: 'NREM 3', yValue: 0, stageId: 'nrem3' },
  { hourLabel: '2.8h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '3.1h', stage: 'REM', yValue: 3, stageId: 'rem' },
  { hourLabel: '3.5h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '4.0h', stage: 'NREM 3', yValue: 0, stageId: 'nrem3' },
  { hourLabel: '4.4h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '4.8h', stage: 'REM', yValue: 3, stageId: 'rem' },
  { hourLabel: '5.3h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '5.9h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '6.3h', stage: 'REM', yValue: 3, stageId: 'rem' },
  { hourLabel: '6.9h', stage: 'NREM 2', yValue: 1, stageId: 'nrem2' },
  { hourLabel: '7.4h', stage: 'REM', yValue: 3, stageId: 'rem' },
  { hourLabel: '8.0h', stage: 'NREM 1', yValue: 2, stageId: 'nrem1' },
  { hourLabel: '8.2h', stage: 'Awake', yValue: 4, stageId: 'wake' },
];
