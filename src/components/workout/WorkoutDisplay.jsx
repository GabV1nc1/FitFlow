import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, Check, RotateCcw, Sparkles } from 'lucide-react';
import ExerciseCard from './ExerciseCard';
import { formatFocusLabel, formatGoalLabel, intensityColors } from '@/lib/workout-utils';

export default function WorkoutDisplay({ workout, onComplete, onNewWorkout }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground">Your Workout</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {formatGoalLabel(workout.goal)}
            {workout.resolved_focus ? ` - ${formatFocusLabel(workout.resolved_focus)}` : ''}
          </p>
          <div className="mt-1.5 flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              ~{workout.estimated_duration} min
            </span>
            <Badge variant="outline" className={`border text-xs ${intensityColors[workout.intensity_level] || intensityColors.moderate}`}>
              <Flame className="mr-1 h-3 w-3" />
              {workout.intensity_level}
            </Badge>
          </div>
        </div>

        {workout.source && (
          <Badge variant="outline" className="border-border text-xs text-muted-foreground">
            <Sparkles className="mr-1 h-3 w-3" />
            {workout.source === 'openai' ? 'AI plan' : 'Smart plan'}
          </Badge>
        )}
      </div>

      {workout.adaptation?.message && (
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm font-medium text-primary">{workout.adaptation.message}</p>
          {workout.adaptation.reason && (
            <p className="mt-1 text-xs text-muted-foreground">{workout.adaptation.reason}</p>
          )}
        </div>
      )}

      {workout.warmup?.length > 0 && (
        <Section title="Warm-up">
          <div className="space-y-2">
            {workout.warmup.map((item, index) => (
              <div key={index} className="rounded-xl border border-border/50 bg-secondary/40 p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-foreground">{item.name}</span>
                  <span className="text-xs text-muted-foreground">{item.duration_minutes} min</span>
                </div>
                {item.notes && <p className="mt-1 text-xs text-muted-foreground/80">{item.notes}</p>}
              </div>
            ))}
          </div>
        </Section>
      )}

      {workout.exercises?.length > 0 && (
        <Section title="Main Workout">
          <div className="space-y-2">
            {workout.exercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} index={index} />
            ))}
          </div>
        </Section>
      )}

      {workout.finisher?.name && (
        <Section title="Finisher">
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
            <p className="text-sm font-medium text-foreground">{workout.finisher.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{workout.finisher.description}</p>
            {workout.finisher.duration_minutes && (
              <span className="mt-2 inline-block text-xs text-accent">{workout.finisher.duration_minutes} min</span>
            )}
          </div>
        </Section>
      )}

      <div className="flex gap-3 pt-2">
        <Button
          onClick={onComplete}
          className="h-11 flex-1 rounded-xl bg-primary font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Check className="mr-2 h-4 w-4" />
          Complete
        </Button>
        <Button
          onClick={onNewWorkout}
          variant="outline"
          className="h-11 flex-1 rounded-xl border-border hover:bg-secondary"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          New Workout
        </Button>
      </div>
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</h3>
      {children}
    </div>
  );
}
