import { useEffect, useState } from "react";
import { type Task } from "../types";
import FormTask from "../components/Task/FormTask";
import ListTasks from "../components/Task/ListTasks";
import { loadTask, updateStorageTask } from "../utils/helper";

const TaskManagement = () => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTask());

  useEffect(() => {
    updateStorageTask(tasks);
  }, [tasks]);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }

        return task;
      })
    );
  };

  const deleteTask = ({ id }: { id: string }) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  return (
    <section className="md:w-2xl">
      <FormTask addTask={addTask} />
      <ListTasks
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </section>
  );
};

export default TaskManagement;
