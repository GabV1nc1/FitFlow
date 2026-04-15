import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function AdaptationBanner({ recentWorkouts }) {
  if (!recentWorkouts || recentWorkouts.length === 0) return null;

  const lastFive = recentWorkouts.slice(0, 5);
  const completedCount = lastFive.filter((workout) => workout.completed).length;
  const skippedCount = lastFive.filter((workout) => workout.skipped).length;

  let message = 'Your recent history is balanced. We will keep intensity steady today.';
  let Icon = Minus;
  let colorClass = 'bg-muted/50 border-border text-muted-foreground';

  if (completedCount >= 3) {
    message = 'Great consistency! Intensity will be slightly increased.';
    Icon = TrendingUp;
    colorClass = 'bg-primary/5 border-primary/20 text-primary';
  } else if (skippedCount >= 2) {
    message = 'Recent skipped sessions detected. Intensity will be reduced.';
    Icon = TrendingDown;
    colorClass = 'bg-chart-4/10 border-chart-4/20 text-chart-4';
  }

  return (
    <div className={`flex items-center gap-3 rounded-xl border p-3 ${colorClass}`}>
      <Icon className="h-4 w-4 flex-shrink-0" />
      <p className="text-xs font-medium">{message}</p>
    </div>
  );
}
