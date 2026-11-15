export interface RoutineHabit {
  id: string;
  title: string;
  description: string;
  timing: string;
}

export const HEALTHY_SLEEP_HABITS: RoutineHabit[] = [
  {
    id: 'consistent-times',
    title: 'Keep consistent sleep and wake times',
    description:
      'Going to bed and waking up around the same time every day—even on weekends—helps steady your circadian clock.',
    timing: 'Daily',
  },
  {
    id: 'comfortable-room',
    title: 'Build a comfortable sleep environment',
    description:
      'Keep your bedroom dark, quiet, and comfortably cool so fewer lights or noises interrupt your sleep cycles.',
    timing: 'Evening',
  },
  {
    id: 'reduce-screens',
    title: 'Lower bright screen exposure before bed',
    description:
      'Phone, tablet, and laptop screens emit bright light that can signal daytime to your brain and delay melatonin.',
    timing: '30–60 min before bed',
  },
  {
    id: 'avoid-late-caffeine',
    title: 'Avoid caffeine later in the day',
    description:
      'Coffee, energy drinks, milk tea, and some sodas can stay active in your body for hours and make falling asleep harder.',
    timing: 'Afternoon & evening',
  },
  {
    id: 'natural-daylight',
    title: 'Get natural daylight in the morning',
    description:
      'Stepping into natural sunlight early in the day helps anchor your internal 24-hour clock and boosts daytime alertness.',
    timing: 'Morning',
  },
  {
    id: 'physical-activity',
    title: 'Stay physically active during the day',
    description:
      'Regular movement builds healthy sleep drive at night, though intense workouts right before bed can feel stimulating.',
    timing: 'Daytime',
  },
  {
    id: 'allow-time',
    title: 'Protect enough time for sleep',
    description:
      'Plan homework and evening routines so there is actually an 8–10 hour window available before your morning alarm.',
    timing: 'Nightly planning',
  },
];

export interface ChecklistItem {
  id: string;
  label: string;
  tip: string;
}

export const BEDTIME_CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'prep-bag',
    label: 'Pack school bag and tomorrow’s uniform/materials',
    tip: 'Removes last-minute morning stress so your mind can settle.',
  },
  {
    id: 'finish-caffeine',
    label: 'Skip caffeinated drinks in the late afternoon and evening',
    tip: 'Water or warm caffeine-free herbal tea won’t block sleepiness.',
  },
  {
    id: 'dim-lights',
    label: 'Dim bright overhead lights in your room',
    tip: 'Soft lighting cues your brain to start releasing melatonin.',
  },
  {
    id: 'screen-curfew',
    label: 'Put away unnecessary screens 30–60 minutes before sleep',
    tip: 'Switch notifications to silent or place your phone across the room.',
  },
  {
    id: 'wind-down',
    label: 'Do a calm, relaxing activity (reading, stretching, journaling)',
    tip: 'Helps transition out of schoolwork or gaming mode.',
  },
  {
    id: 'target-bedtime',
    label: 'Get into bed near your target bedtime for 8–10 hours of rest',
    tip: 'Consistency trains your body when to expect sleep.',
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const SLEEP_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'How many hours of sleep per 24 hours are generally recommended for teenagers aged 13–18?',
    options: ['5–6 hours', '6–7 hours', '8–10 hours', '11–13 hours'],
    correctIndex: 2,
    explanation:
      'Health guidelines (such as the AASM and CDC) recommend that teens aged 13–18 regularly get 8–10 hours of sleep per 24 hours to support learning, mood, and physical development.',
  },
  {
    id: 2,
    question: 'What is the circadian rhythm?',
    options: [
      'A type of dream that only happens in deep sleep',
      'The body’s internal ~24-hour clock that guides sleep and wakefulness',
      'A hormone found only in caffeinated drinks',
      'A breathing exercise used right before exams',
    ],
    correctIndex: 1,
    explanation:
      'Your circadian rhythm is an internal ~24-hour biological clock influenced strongly by light and darkness, helping coordinate alertness, body temperature, and sleep timing.',
  },
  {
    id: 3,
    question: 'How does bright light from screens at night affect melatonin?',
    options: [
      'It signals daytime cues and can delay or suppress melatonin release',
      'It immediately increases melatonin production',
      'It turns NREM sleep directly into REM sleep',
      'It has no connection to sleep timing at all',
    ],
    correctIndex: 0,
    explanation:
      'Light exposure—especially bright blue-enriched light at night—tells the brain it may still be daytime, which can delay melatonin release and push sleepiness later.',
  },
  {
    id: 4,
    question: 'Why does caffeine temporarily make you feel more alert?',
    options: [
      'It creates brand-new sleep hours for your brain',
      'It blocks adenosine receptors, temporarily masking sleepiness signals',
      'It increases deep slow-wave sleep during class',
      'It lowers your heart rate into resting mode',
    ],
    correctIndex: 1,
    explanation:
      'Adenosine builds up in the brain while you are awake to create sleep pressure. Caffeine blocks adenosine signaling temporarily, which hides tiredness without replacing real sleep.',
  },
  {
    id: 5,
    question: 'Which sleep stage is especially linked to physical tissue repair, growth, and immune support?',
    options: ['Awake rest', 'NREM Stage 1', 'NREM Stage 3 (Deep Sleep)', 'Midday daydreaming'],
    correctIndex: 2,
    explanation:
      'NREM Stage 3 (deep slow-wave sleep) plays an important role in physical recovery, immune function, and growth-related body processes.',
  },
  {
    id: 6,
    question: 'When can a daytime nap be unhelpful for nighttime sleep?',
    options: [
      'When it is long or taken late in the afternoon/evening',
      'When it happens before noon for 15 minutes',
      'When you sleep in a dark room at night',
      'Naps never affect nighttime sleep under any condition',
    ],
    correctIndex: 0,
    explanation:
      'Short early naps can help alertness if needed, but long or late-day naps reduce sleep pressure and can make it harder to fall asleep at night.',
  },
  {
    id: 7,
    question: 'Which habit best helps steady your body’s internal sleep clock?',
    options: [
      'Changing your bedtime by 4 hours every weekend',
      'Keeping consistent sleep and wake times plus getting morning daylight',
      'Drinking iced coffee at 9:00 PM to finish studying',
      'Studying under bright overhead lights until midnight every night',
    ],
    correctIndex: 1,
    explanation:
      'Regular sleep/wake times combined with morning daylight help keep your circadian rhythm aligned so falling asleep and waking up feel smoother.',
  },
];
