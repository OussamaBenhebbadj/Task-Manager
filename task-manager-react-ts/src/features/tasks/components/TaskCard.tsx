
import type { Task, TaskStatus } from "../types/task";

type TaskCardProps = {
  task: Task;
  onStatusChange: (taskId: number, status: TaskStatus) => void;
  onDelete: (taskId: number) => void;
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

export function TaskCard({
  task,
  onStatusChange,
  onDelete,
}: TaskCardProps) {
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

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <label className="flex flex-col gap-1 text-xs font-medium text-slate-500">
          Modifier le statut

          <select
            value={task.status}
            onChange={(event) =>
              onStatusChange(task.id, event.target.value as TaskStatus)
            }
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="todo">À faire</option>
            <option value="doing">En cours</option>
            <option value="done">Terminée</option>
          </select>
        </label>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
          aria-label={`Supprimer la tâche ${task.title}`}
        >
          Supprimer
        </button>
      </div>
    </article>
  );
}
