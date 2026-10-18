
import type { Task, TaskStatus, TaskUpdate } from "../types/task";

export function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

export function updateTask(task: Task, updates: TaskUpdate): Task {
  return {
    ...task,
    ...updates,
  };
}


export function getTasksByStatus(
  tasks: Task[],
  status: TaskStatus,
): Task[] {
  return tasks.filter((task) => task.status === status);
}
