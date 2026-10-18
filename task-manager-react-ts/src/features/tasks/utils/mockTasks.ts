
import type { Task } from "../types/task";

export const mockTasks = [
  {
    id: 1,
    title: "Apprendre les bases de React",
    status: "done",
    description: "Comprendre les composants, les props et JSX.",
  },
  {
    id: 2,
    title: "Pratiquer TypeScript",
    status: "doing",
    description: "Travailler les types, les unions et les génériques.",
  },
  {
    id: 3,
    title: "Construire l'interface du Task Manager",
    status: "todo",
    description: "Créer une interface claire et responsive.",
  },
  {
    id: 4,
    title: "Ajouter la recherche de tâches",
    status: "todo",
    description: "Permettre de rechercher une tâche par son titre.",
  },
  {
    id: 5,
    title: "Découvrir le localStorage",
    status: "doing",
    description: "Conserver les tâches dans le navigateur.",
  },
] satisfies Task[];
