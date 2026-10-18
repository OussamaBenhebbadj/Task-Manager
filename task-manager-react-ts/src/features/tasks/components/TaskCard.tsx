
import type { Task, TaskStatus } from "../types/task";

type TaskCardProps = {
  task: Task;
};

const statusLabels: Record<TaskStatus, string> = {
  todo: "À faire",
  doing: "En cours",
  done: "Terminée",
};

const statusStyles: Record<TaskStatus, string> = {
  todo: "bg-slate-100 text-slate-700",
  doing: "bg-amber-100 text-amber-800",
  done: "bg-green-100 text-green-800",
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-900">
          {task.title}
        </h3>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[task.status]}`}
        >
          {statusLabels[task.status]}
        </span>
      </div>

      {task.description && (
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {task.description}
        </p>
      )}
    </article>
  );
}
