import { Repeat, Timer } from 'lucide-react';

export default function ExerciseCard({ exercise, index }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-secondary/50 p-3">
      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
        <span className="text-xs font-bold text-primary">{index + 1}</span>
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{exercise.name}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-3">
          {exercise.sets && exercise.reps && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Repeat className="h-3 w-3" />
              {exercise.sets} x {exercise.reps}
            </span>
          )}
          {exercise.rest_seconds && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Timer className="h-3 w-3" />
              {exercise.rest_seconds}s rest
            </span>
          )}
        </div>
        {exercise.notes && (
          <p className="mt-1 text-xs text-muted-foreground/70">{exercise.notes}</p>
        )}
      </div>
    </div>
  );
}
