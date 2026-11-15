import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  Coffee,
  MoonStar,
  RotateCcw,
  Sun,
  Trophy,
  XCircle,
} from 'lucide-react';
import {
  BEDTIME_CHECKLIST_ITEMS,
  HEALTHY_SLEEP_HABITS,
  SLEEP_QUIZ_QUESTIONS,
} from '../data/guideData';
import { RevealSection } from '../components/RevealSection';
import { SourceLabel } from '../components/SourceLabel';

const CHECKLIST_STORAGE_KEY = 'sblb_bedtime_checklist_v1';
const QUIZ_STORAGE_KEY = 'sblb_sleep_quiz_v1';

interface QuizSavedState {
  currentIndex: number;
  answers: Record<number, number>;
  completed: boolean;
}

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage quota / privacy mode errors gracefully
  }
}

export function GuidePage() {
  const [checkedIds, setCheckedIds] = useState<string[]>(() =>
    readStorage<string[]>(CHECKLIST_STORAGE_KEY, [])
  );

  const [quizState, setQuizState] = useState<QuizSavedState>(() =>
    readStorage<QuizSavedState>(QUIZ_STORAGE_KEY, {
      currentIndex: 0,
      answers: {},
      completed: false,
    })
  );

  useEffect(() => {
    writeStorage(CHECKLIST_STORAGE_KEY, checkedIds);
  }, [checkedIds]);

  useEffect(() => {
    writeStorage(QUIZ_STORAGE_KEY, quizState);
  }, [quizState]);

  const toggleChecklistItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetChecklist = () => {
    setCheckedIds([]);
  };

  const completedCount = checkedIds.length;
  const totalChecklist = BEDTIME_CHECKLIST_ITEMS.length;
  const checklistPercent = Math.round((completedCount / totalChecklist) * 100);

  // Quiz helpers
  const activeQuestion =
    SLEEP_QUIZ_QUESTIONS[quizState.currentIndex] || SLEEP_QUIZ_QUESTIONS[0];
  const selectedOption = quizState.answers[activeQuestion.id];
  const hasAnsweredCurrent = typeof selectedOption === 'number';

  const handleSelectOption = (optionIndex: number) => {
    if (hasAnsweredCurrent) return;
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [activeQuestion.id]: optionIndex,
      },
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentIndex + 1 >= SLEEP_QUIZ_QUESTIONS.length) {
      setQuizState((prev) => ({ ...prev, completed: true }));
    } else {
      setQuizState((prev) => ({ ...prev, currentIndex: prev.currentIndex + 1 }));
    }
  };

  const handleResetQuiz = () => {
    setQuizState({
      currentIndex: 0,
      answers: {},
      completed: false,
    });
  };

  const quizScore = SLEEP_QUIZ_QUESTIONS.reduce((acc, q) => {
    return quizState.answers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  return (
    <div>
      {/* Header */}
      <section className="bg-[#302044] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SourceLabel
            source="Scientific information (external source)"
            className="text-[#E9C75B] [&_svg]:text-[#E9C75B]"
          />
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            Small Changes, Better Sleep
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            Improving sleep doesn&apos;t require changing everything overnight. Use these practical sleep habits, caffeine and napping facts, an interactive bedtime checklist, and a quick quiz to turn science into daily action.
          </p>
        </div>
      </section>

      {/* Section 1: Healthy Sleep Routine */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
              Part 01 · Sleep Hygiene
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-[#302044]">
              7 Habits for a Healthy Sleep Routine
            </h2>
            <p className="mt-2 text-base leading-relaxed text-[#29242F]/85">
              Healthy sleep hygiene works best when daytime choices and evening wind-down cues reinforce each other.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HEALTHY_SLEEP_HABITS.map((habit, index) => (
              <article
                key={habit.id}
                className="flex flex-col justify-between rounded-2xl border border-[#302044]/12 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#302044]/75">
                    <span className="tabular-nums">Habit 0{index + 1}</span>
                    <span>{habit.timing}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-[#302044]">
                    {habit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#29242F]/85">
                    {habit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* Section 2 & 3: Understanding Caffeine & Is Napping Helpful? */}
      <RevealSection>
        <section className="border-y border-[#302044]/10 bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Caffeine Card */}
              <article className="rounded-2xl border border-[#302044]/12 bg-[#F2E9D9]/55 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#302044] text-[#E9C75B]">
                    <Coffee className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#302044]/75">
                      Part 02 · Stimulants
                    </p>
                    <h2 className="font-serif text-2xl font-bold text-[#302044]">
                      Understanding Caffeine
                    </h2>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#29242F]/90">
                  <p>
                    <strong>How it works in the nervous system:</strong> Throughout the day, a chemical called <strong>adenosine</strong> builds up in the brain and creates natural sleep pressure. Caffeine blocks adenosine receptors, temporarily masking tiredness signals and making you feel more alert.
                  </p>
                  <p>
                    <strong>Why timing matters:</strong> Caffeine stays active in the body for several hours. Drinking coffee, energy drinks, iced tea, or caffeinated soda in the late afternoon or evening can delay falling asleep and reduce deep sleep quality.
                  </p>
                  <p>
                    <strong>Individual sensitivity varies:</strong> Some teenagers feel jittery or stay awake after a single afternoon tea, while others notice subtler sleep disruption—even if they fall asleep, sleep can be lighter.
                  </p>
                </div>

                <div className="mt-5 rounded-xl bg-[#E9C75B] p-4 text-sm font-medium text-[#29242F]">
                  <strong>Important reminder:</strong> Caffeine only hides tiredness temporarily—it never replaces actual sleep. Teens should not rely on caffeine as a substitute for getting enough rest.
                </div>
              </article>

              {/* Napping Card */}
              <article className="rounded-2xl border border-[#302044]/12 bg-[#F2E9D9]/55 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C994A8] text-[#29242F]">
                      <Sun className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#302044]/75">
                        Part 03 · Daytime Rest
                      </p>
                      <h2 className="font-serif text-2xl font-bold text-[#302044]">
                        Is Napping Helpful?
                      </h2>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#29242F]/90">
                    <div className="rounded-xl bg-white p-4">
                      <h3 className="font-semibold text-[#302044]">
                        When short naps help
                      </h3>
                      <p className="mt-1">
                        A brief daytime nap (around 15–25 minutes) earlier in the afternoon can refresh alertness without leaving heavy grogginess.
                      </p>
                    </div>
                    <div className="rounded-xl bg-white p-4">
                      <h3 className="font-semibold text-[#302044]">
                        When long or late naps hurt
                      </h3>
                      <p className="mt-1">
                        Long naps (over an hour) or naps taken in the late afternoon/evening release built-up sleep pressure, making it much harder to fall asleep at bedtime.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-[#302044] p-4 text-sm text-white">
                  <strong className="text-[#E9C75B]">Bottom line:</strong> Naps can be a helpful occasional boost, but they should never replace getting sufficient nighttime sleep (8–10 hours for teens).
                </div>
              </article>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Section 4: Interactive Bedtime-Routine Checklist */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#302044]/12 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#302044]/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#302044]/75">
                  Part 04 · Tonight&apos;s Action Plan
                </p>
                <h2 className="mt-1 font-serif text-2xl font-bold text-[#302044] sm:text-3xl">
                  Interactive Bedtime-Routine Checklist
                </h2>
                <p className="mt-1 text-sm text-[#29242F]/80">
                  Check off steps as you prepare for bed tonight. Your progress saves automatically in this browser.
                </p>
              </div>
              <button
                type="button"
                onClick={resetChecklist}
                className="inline-flex min-h-[40px] items-center gap-1.5 self-start rounded-lg border border-[#302044]/20 bg-[#F2E9D9] px-3.5 py-2 text-xs font-semibold text-[#302044] transition-colors hover:bg-[#E9C75B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044]"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset Checklist</span>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-semibold text-[#302044]">
                <span>Tonight&apos;s Progress</span>
                <span className="tabular-nums">
                  {completedCount} of {totalChecklist} completed ({checklistPercent}%)
                </span>
              </div>
              <div
                className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#F2E9D9]"
                role="progressbar"
                aria-valuenow={checklistPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Bedtime routine checklist progress"
              >
                <div
                  className="h-full rounded-full bg-[#302044] transition-all duration-300"
                  style={{ width: `${checklistPercent}%` }}
                />
              </div>
            </div>

            {/* Checklist Items */}
            <ul className="mt-6 space-y-3">
              {BEDTIME_CHECKLIST_ITEMS.map((item) => {
                const isChecked = checkedIds.includes(item.id);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => toggleChecklistItem(item.id)}
                      aria-pressed={isChecked}
                      className={`flex w-full items-start gap-3.5 rounded-xl border p-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] ${
                        isChecked
                          ? 'border-[#302044] bg-[#F2E9D9]'
                          : 'border-[#302044]/12 bg-white hover:bg-[#F2E9D9]/45'
                      }`}
                    >
                      {isChecked ? (
                        <CheckCircle2
                          className="h-5 w-5 text-[#302044] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      ) : (
                        <Circle
                          className="h-5 w-5 text-[#302044]/45 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      )}
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            isChecked ? 'line-through text-[#302044]/75' : 'text-[#302044]'
                          }`}
                        >
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-xs text-[#29242F]/75">{item.tip}</p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            {completedCount === totalChecklist && (
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#E9C75B] p-4 text-sm font-semibold text-[#29242F]">
                <MoonStar className="h-5 w-5 text-[#302044] shrink-0" aria-hidden="true" />
                <span>
                  All steps checked for tonight. Wishing you a restful 8–10 hours of sleep!
                </span>
              </div>
            )}
          </div>
        </section>
      </RevealSection>

      {/* Section 5: Sleep Knowledge Quiz */}
      <RevealSection>
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#302044] p-6 text-white sm:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-white/15 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E9C75B]">
                  Part 05 · Test Yourself
                </p>
                <h2 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Sleep Knowledge Quiz
                </h2>
              </div>
              {!quizState.completed && (
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E9C75B] tabular-nums">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span>
                    Question {quizState.currentIndex + 1} of {SLEEP_QUIZ_QUESTIONS.length}
                  </span>
                </div>
              )}
            </div>

            {quizState.completed ? (
              <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8 text-[#29242F]">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9C75B] text-[#29242F]">
                      <Trophy className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#302044]/75">
                        Quiz Complete
                      </p>
                      <h3 className="font-serif text-3xl font-bold text-[#302044] tabular-nums">
                        You scored {quizScore} / {SLEEP_QUIZ_QUESTIONS.length}
                      </h3>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#302044] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3f2c58]"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    <span>Retry Quiz</span>
                  </button>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#29242F]/85">
                  {quizScore >= 6
                    ? 'Great job! You have a strong grasp of sleep science, circadian timing, and healthy daily routines.'
                    : quizScore >= 4
                    ? 'Solid effort! Review any explanations below or revisit the Sleep Science page to sharpen a few concepts.'
                    : 'Thanks for taking the quiz! Exploring the Sleep Science and Sleep Guide sections will make these ideas stick.'}
                </p>

                <div className="mt-6 space-y-3 border-t border-[#302044]/10 pt-5">
                  {SLEEP_QUIZ_QUESTIONS.map((q, idx) => {
                    const userChoice = quizState.answers[q.id];
                    const isCorrect = userChoice === q.correctIndex;
                    return (
                      <div key={q.id} className="rounded-xl bg-[#F2E9D9]/65 p-4 text-sm">
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-semibold text-[#302044]">
                            {idx + 1}. {q.question}
                          </p>
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-bold shrink-0 ${
                              isCorrect ? 'text-emerald-800' : 'text-rose-800'
                            }`}
                          >
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                                <span>Correct</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="h-4 w-4" aria-hidden="true" />
                                <span>Review</span>
                              </>
                            )}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#29242F]/85">
                          <strong>Answer:</strong> {q.options[q.correctIndex]} — {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="mt-7 rounded-2xl bg-white p-6 sm:p-8 text-[#29242F]">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#302044]">
                  {activeQuestion.question}
                </h3>

                <div className="mt-5 space-y-3">
                  {activeQuestion.options.map((optionText, optIdx) => {
                    const isSelected = selectedOption === optIdx;
                    const isCorrectOption = optIdx === activeQuestion.correctIndex;

                    let buttonStyle =
                      'border-[#302044]/15 bg-[#F2E9D9]/45 text-[#29242F] hover:bg-[#F2E9D9]';
                    if (hasAnsweredCurrent) {
                      if (isCorrectOption) {
                        buttonStyle =
                          'border-emerald-700 bg-emerald-50 text-emerald-950 font-semibold';
                      } else if (isSelected) {
                        buttonStyle =
                          'border-rose-700 bg-rose-50 text-rose-950';
                      } else {
                        buttonStyle =
                          'border-[#302044]/10 bg-white text-[#29242F]/60';
                      }
                    }

                    return (
                      <button
                        key={optionText}
                        type="button"
                        disabled={hasAnsweredCurrent}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`flex min-h-[48px] w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#302044] ${buttonStyle}`}
                      >
                        <span>{optionText}</span>
                        {hasAnsweredCurrent && isCorrectOption && (
                          <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" aria-hidden="true" />
                        )}
                        {hasAnsweredCurrent && isSelected && !isCorrectOption && (
                          <XCircle className="h-5 w-5 text-rose-700 shrink-0" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {hasAnsweredCurrent && (
                  <div className="mt-6 space-y-4 border-t border-[#302044]/10 pt-5">
                    <div
                      className={`rounded-xl p-4 text-sm leading-relaxed ${
                        selectedOption === activeQuestion.correctIndex
                          ? 'bg-[#E9C75B]/55 text-[#29242F]'
                          : 'bg-[#C994A8]/40 text-[#29242F]'
                      }`}
                    >
                      <p className="font-bold text-[#302044]">
                        {selectedOption === activeQuestion.correctIndex
                          ? 'Correct!'
                          : 'Not quite — here is why:'}
                      </p>
                      <p className="mt-1">{activeQuestion.explanation}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleResetQuiz}
                        className="text-xs font-semibold text-[#302044]/75 hover:text-[#302044] underline"
                      >
                        Restart quiz
                      </button>
                      <button
                        type="button"
                        onClick={handleNextQuestion}
                        className="inline-flex min-h-[44px] items-center rounded-lg bg-[#302044] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3f2c58]"
                      >
                        {quizState.currentIndex + 1 >= SLEEP_QUIZ_QUESTIONS.length
                          ? 'See Final Score'
                          : 'Next Question'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
