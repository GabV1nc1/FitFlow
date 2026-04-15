import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Flame, Calendar } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';
import ExerciseCard from '../components/workout/ExerciseCard';
import { getStoredWorkout } from '@/lib/workout-storage';
import { formatFocusLabel, formatGoalLabel, intensityColors } from '@/lib/workout-utils';

export default function WorkoutDetail() {
  const { id: workoutId } = useParams();

  const { data: workout, isLoading } = useQuery({
    queryKey: ['workout', workoutId],
    queryFn: () => getStoredWorkout(workoutId),
    enabled: !!workoutId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground">Workout not found</p>
        <Link to="/history" className="mt-2 inline-block text-sm text-primary">Back to History</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/history"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to History
      </Link>

      <div className="glass-panel rounded-[28px] p-5 sm:p-6">
        <div>
          <h1 className="font-heading text-xl font-bold text-foreground">
            {formatGoalLabel(workout.goal)}
            {workout.resolved_focus && ` - ${formatFocusLabel(workout.resolved_focus)}`}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {format(new Date(workout.created_at), 'MMMM d, yyyy')}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              ~{workout.estimated_duration || workout.duration_minutes} min
            </span>
            {workout.intensity_level && (
              <Badge variant="outline" className={`border text-xs ${intensityColors[workout.intensity_level] || ''}`}>
                <Flame className="mr-1 h-3 w-3" />
                {workout.intensity_level}
              </Badge>
            )}
            {workout.completed && (
              <Badge className="border-primary/20 bg-primary/10 text-xs text-primary">Completed</Badge>
            )}
            {workout.skipped && (
              <Badge className="border-destructive/20 bg-destructive/10 text-xs text-destructive">Skipped</Badge>
            )}
          </div>
        </div>

        <div className="mt-6 space-y-6">
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
        </div>
      </div>
    </div>
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
