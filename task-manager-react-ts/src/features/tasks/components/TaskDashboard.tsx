
import type { Task, TaskStatus } from "../types/task";

type TaskDashboardProps = {
  tasks: Task[];
};

type StatCardProps = {
  label: string;
  value: number;
  description: string;
  icon: string;
  accent: string;
};

function StatCard({
  label,
  value,
  description,
  icon,
  accent,
}: StatCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${accent}`}
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-500">{description}</p>
    </article>
  );
}

export function TaskDashboard({ tasks }: TaskDashboardProps) {
  const counts: Record<TaskStatus, number> = {
    todo: tasks.filter((task) => task.status === "todo").length,
    doing: tasks.filter((task) => task.status === "doing").length,
    done: tasks.filter((task) => task.status === "done").length,
  };

  const total = tasks.length;
  const completedPercentage =
    total === 0 ? 0 : Math.round((counts.done / total) * 100);

  const stats: StatCardProps[] = [
    {
      label: "Total des tâches",
      value: total,
      description: "Toutes les tâches enregistrées",
      icon: "▤",
      accent: "bg-indigo-50 text-indigo-600",
    },
    {
      label: "À faire",
      value: counts.todo,
      description: "Tâches en attente",
      icon: "○",
      accent: "bg-slate-100 text-slate-600",
    },
    {
      label: "En cours",
      value: counts.doing,
      description: "Tâches en progression",
      icon: "◷",
      accent: "bg-amber-50 text-amber-600",
    },
    {
      label: "Terminées",
      value: counts.done,
      description: "Tâches accomplies",
      icon: "✓",
      accent: "bg-green-50 text-green-600",
    },
  ];

  return (
    <section className="mb-8" aria-labelledby="dashboard-title">
      <div className="mb-4">
        <h2
          id="dashboard-title"
          className="text-xl font-bold text-slate-900"
        >
          Vue d'ensemble
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Suis ta progression et garde le contrôle de tes tâches.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold text-slate-900">
              Progression globale
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Proportion de tâches terminées
            </p>
          </div>

          <span className="text-xl font-bold text-green-600">
            {completedPercentage}%
          </span>
        </div>

        <div
          className="h-2.5 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label="Progression des tâches"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={completedPercentage}
        >
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{ width: `${completedPercentage}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-slate-500">
          {counts.done} tâche(s) terminée(s) sur {total}.
        </p>
      </div>
    </section>
  );
}
