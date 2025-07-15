import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  const baseStyles = "px-4 py-2 rounded font-semibold";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      {...props}
      {...props}
    />
  );
};

export default Button;
