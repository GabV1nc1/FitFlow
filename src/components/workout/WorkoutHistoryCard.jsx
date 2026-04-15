import { format } from 'date-fns';
import { Badge } from "@/components/ui/badge";
import { Clock, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatFocusLabel, formatGoalLabel, goalIconByType, intensityColors } from '@/lib/workout-utils';

export default function WorkoutHistoryCard({ workout }) {
  const exerciseCount = workout.exercises?.length || 0;
  const GoalIcon = goalIconByType[workout.goal];

  return (
    <Link to={`/workout/${workout.id}`}>
      <div className="glass-panel rounded-2xl p-4 transition-all hover:border-primary/30">
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {GoalIcon ? <GoalIcon className="h-4 w-4 text-primary" /> : null}
              <h3 className="truncate text-sm font-medium text-foreground">
                {formatGoalLabel(workout.goal)}
                {workout.resolved_focus ? ` - ${formatFocusLabel(workout.resolved_focus)}` : ''}
              </h3>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {workout.estimated_duration || workout.duration_minutes} min
              </span>
              <span className="text-xs text-muted-foreground">
                {exerciseCount} exercise{exerciseCount !== 1 ? 's' : ''}
              </span>
              {workout.intensity_level && (
                <Badge variant="outline" className={`border text-[10px] ${intensityColors[workout.intensity_level] || ''}`}>
                  {workout.intensity_level}
                </Badge>
              )}
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-muted-foreground">
              {format(new Date(workout.created_at), 'MMM d')}
            </span>
            {workout.completed && (
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3 w-3 text-primary" />
              </div>
            )}
            {workout.skipped && (
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/10">
                <X className="h-3 w-3 text-destructive" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
