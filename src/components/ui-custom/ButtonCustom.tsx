import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: ReactNode;
  to?: string; // Jika ada, maka dijadikan <Link>
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
};

const variantStyles = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const ButtonCustom = ({
  children,
  to,
  onClick,
  className = "",
  icon,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  const isIconOnly = !!icon && !children;
  const baseClass = `${
    isIconOnly ? "p-2" : "px-4 py-2"
  } inline-block text-white rounded hover:bg-blue-600 transition duration-200 cursor-pointer ${
    variantStyles[variant]
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass} style={{ color: "white" }}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass} type={type}>
      {icon}
      {children}
    </button>
  );
};

export default ButtonCustom;
