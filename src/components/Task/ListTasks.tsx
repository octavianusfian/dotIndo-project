import { type Task } from "../../types";
import Button from "../ui-custom/ButtonCustom";
import { FaTrashAlt } from "react-icons/fa";

type ListTasksProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
  deleteTask: ({ id }: { id: string }) => void;
};

const ListTasks = ({ tasks, toggleTask, deleteTask }: ListTasksProps) => {
  return (
    <ul className="space-y-2 mt-4">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow hover:shadow-md transition"
          >
            <p
              className={`text-gray-800 ${
                task.isCompleted ? "line-through text-gray-400" : ""
              }`}
            >
              {task.description}
            </p>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleTask({ id: task.id })}
                className="w-5 h-5 accent-blue-500 bg-white border-gray-300 rounded"
              />
              <Button
                onClick={() => deleteTask({ id: task.id })}
                variant="danger"
                icon={<FaTrashAlt />}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListTasks;
