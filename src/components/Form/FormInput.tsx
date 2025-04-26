import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  type = "text",
  ...props
}) => {
  return (
    <div className="w-full mb-4">
      <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          type={type}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...props}
        />
      )}
    </div>
  );
};

export default FormInput;
