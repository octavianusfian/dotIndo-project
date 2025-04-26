import { useState } from "react";
import Button from "../ui-custom/ButtonCustom";
import { toast } from "react-hot-toast";
import { type Task } from "../../types";
import FormContainer from "../Form/FormContainer";
import Input from "../Form/Input";

type FormTaskProps = {
  addTask: (task: Task) => void;
};

const FormTask = ({ addTask }: FormTaskProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error("Task is empty...");
      return;
    }

    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });
    setText("");
  };

  return (
    <FormContainer
      onSubmit={(e) => handleSubmit(e as React.FormEvent<HTMLFormElement>)}
    >
      <Input
        type="text"
        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Enter your task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" className="shrink-0">
        Add Task
      </Button>
    </FormContainer>
  );
};

export default FormTask;
