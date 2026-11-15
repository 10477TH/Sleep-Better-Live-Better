export type ContentSourceTag =
  | 'Our survey data'
  | 'Scientific information (external source)'
  | "Our team's observation";

export interface AgeSlice {
  name: string;
  percentage: number;
  count: number;
  color: string;
}

export interface SurveyChartDataset {
  id: string;
  title: string;
  subtitle: string;
  sourceLabel: ContentSourceTag;
  chartType: 'donut';
  totalRespondents: number;
  data: AgeSlice[];
  summaryNote: string;
}

export const SURVEY_OVERVIEW = {
  totalRespondents: 45,
  sourceLabel: 'Our survey data' as ContentSourceTag,
  collectionContext:
    'Collected via an initial student-led questionnaire among secondary students and community members.',
};

export const AGE_DISTRIBUTION_CHART: SurveyChartDataset = {
  id: 'age-distribution',
  title: 'Respondent Age Distribution',
  subtitle: 'Breakdown of the 45 participants who completed our questionnaire',
  sourceLabel: 'Our survey data',
  chartType: 'donut',
  totalRespondents: 45,
  data: [
    {
      name: 'Age 14',
      percentage: 37.8,
      count: 17,
      color: '#302044',
    },
    {
      name: 'Age 15',
      percentage: 35.6,
      count: 16,
      color: '#C994A8',
    },
    {
      name: 'Other ages',
      percentage: 26.6,
      count: 12,
      color: '#E9C75B',
    },
  ],
  summaryNote:
    'Most respondents were 14 or 15 years old (73.4% combined, 33 of 45 respondents), with the remaining 26.6% (12 respondents) from other age groups.',
};

/**
 * Extensible array of survey charts.
 * Add additional SurveyChartDataset objects here in the future to render new chart cards automatically.
 */
export const SURVEY_CHARTS: SurveyChartDataset[] = [AGE_DISTRIBUTION_CHART];

export const BEDTIME_FINDING = {
  sourceLabel: 'Our survey data' as ContentSourceTag,
  percentage: 40,
  highlightedCount: 18,
  totalCount: 45,
  windowLabel: '11:00 PM – 12:00 AM',
  headline: '40% reported going to bed between 11 PM and 12 AM',
  detail:
    'About 18 out of 45 respondents reported a typical bedtime between 11:00 PM and midnight. For secondary students who wake early for school, starting sleep in this late window can make it harder to reach the recommended 8–10 hours of sleep.',
};

export const TEAM_OBSERVATION_FINDING = {
  sourceLabel: "Our team's observation" as ContentSourceTag,
  title: 'Self-Reported Concentration vs. Everyday Observation',
  body: 'Some respondents described their daytime concentration as normal on the questionnaire, yet our team observed that students in everyday school settings could still show signs of difficulty focusing and emotional fluctuations.',
  explanation:
    'Self-reported questionnaires and everyday observations do not always capture the same picture. People may get used to feeling tired and rate it as "normal," or short-term situations at school may reflect many different daily factors. This observation does not prove that sleep deprivation caused those behaviors—it simply highlights why looking at habits from more than one perspective is helpful.',
};

export const SURVEY_LIMITATIONS = {
  sourceLabel: 'Our survey data' as ContentSourceTag,
  title: 'Study Limitations & Honest Context',
  intro:
    'Good science means being clear about what data can and cannot show. Our team notes four important limitations to this initial questionnaire:',
  items: [
    {
      heading: 'Small sample size (45 respondents)',
      detail:
        'With 45 responses, these percentages give us a helpful starting snapshot, not a broad statistical measurement.',
    },
    {
      heading: 'Limited representativeness',
      detail:
        'The participants may not represent every grade level in our school or the wider community.',
    },
    {
      heading: 'Self-reported answers',
      detail:
        'Questionnaires rely on what people remember or think about their routines, which may differ from their actual day-to-day sleep habits.',
    },
    {
      heading: 'An initial snapshot, not a definitive conclusion',
      detail:
        'This survey does not test cause-and-effect relationships, significance levels, or clinical diagnoses. It serves as a starting point for community conversation.',
    },
  ],
};
