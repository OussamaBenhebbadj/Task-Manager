
export type TaskStatus = "todo" | "doing" | "done";

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  description?: string;
};

export type TaskUpdate = Partial<Pick<Task, "title" | "status">>;

export type TaskPreview = Pick<Task, "title" | "status">;

export type StatusLabels = Record<TaskStatus, string>;
