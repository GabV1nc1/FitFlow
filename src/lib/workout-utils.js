import { Dumbbell, Flame, TimerReset } from 'lucide-react';

export const intensityColors = {
  low: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
  moderate: 'bg-chart-4/10 text-chart-4 border-chart-4/20',
  high: 'bg-chart-1/10 text-chart-1 border-chart-1/20',
  extreme: 'bg-destructive/10 text-destructive border-destructive/20',
};

const goalLabels = {
  muscle_gain: 'Muscle Gain',
  fat_loss: 'Fat Loss',
  endurance: 'Endurance',
};

const focusLabels = {
  none: 'No preference',
  chest: 'Chest',
  back: 'Back',
  legs: 'Legs',
  shoulders: 'Shoulders',
  arms: 'Arms',
  core: 'Core',
  full_body: 'Full Body',
  upper: 'Upper Body',
};

export const goalIconByType = {
  muscle_gain: Dumbbell,
  fat_loss: Flame,
  endurance: TimerReset,
};

export function formatGoalLabel(goal) {
  return goalLabels[goal] || goal;
}

export function formatFocusLabel(focus) {
  return focusLabels[focus] || focus;
}
