import { FormEvent, ReactNode } from "react";

type FormContainerProps = {
  children: ReactNode;
  onSubmit?: (e: FormEvent) => void;
  className?: string;
};
const FormContainer = ({
  children,
  onSubmit,
  className = "",
}: FormContainerProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex items-center gap-4 w-full max-w-2xl bg-white p-4 rounded shadow mx-auto mt-4 ${className}`}
    >
      {children}
    </form>
  );
};

export default FormContainer;
