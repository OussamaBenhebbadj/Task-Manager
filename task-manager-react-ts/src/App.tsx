
import { useState, type FormEvent } from "react";
import { TaskCard } from "./features/tasks/components/TaskCard";
import { mockTasks } from "./features/tasks/utils/mockTasks";
import type { Task, TaskStatus } from "./features/tasks/types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      status: "todo",
      description: "Nouvelle tâche",
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    setTitle("");
  }

  function handleStatusChange(taskId: number, status: TaskStatus) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status } : task,
      ),
    );
  }

  function handleDelete(taskId: number) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
            Task Manager
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mes tâches
          </h1>

          <p className="mt-3 text-slate-600">
            Organise ton travail, une tâche à la fois.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mb-6 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row"
        >
          <label htmlFor="task-title" className="sr-only">
            Titre de la tâche
          </label>

          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Ex. : Réviser TypeScript"
            className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Ajouter une tâche
          </button>
        </form>

        <section
          aria-label="Rechercher et filtrer les tâches"
          className="mb-6 grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="task-search"
              className="text-sm font-medium text-slate-700"
            >
              Rechercher
            </label>

            <input
              id="task-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Rechercher par titre..."
              className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="status-filter"
              className="text-sm font-medium text-slate-700"
            >
              Filtrer par statut
            </label>

            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as TaskStatus | "all")
              }
              className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="all">Tous les statuts</option>
              <option value="todo">À faire</option>
              <option value="doing">En cours</option>
              <option value="done">Terminées</option>
            </select>
          </div>
        </section>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-slate-900">
            Toutes les tâches
          </h2>

          <span className="text-sm text-slate-500">
            {filteredTasks.length} résultat(s) sur {tasks.length} tâche(s)
          </span>
        </div>

        {filteredTasks.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
            Aucune tâche ne correspond à ta recherche.
          </p>
        ) : (
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
