import { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => {
  return <input ref={ref} className={`... ${className}`} {...props} />;
});

Input.displayName = "Input";

export default Input;
