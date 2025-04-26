import { Task } from "../types";

export function loadTask(): Task[] {
  const storedTasks = localStorage.getItem("tasks");

  return storedTasks ? JSON.parse(storedTasks) : [];
}

export function updateStorageTask(tasks: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export const formatPrice = (price: number) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return dollarsAmount;
};


