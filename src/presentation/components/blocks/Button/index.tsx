import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  size?: "md" | "lg" | "xl";
  variant?: "text" | "contained";
  color?: "primary" | "purple-dark" | "dark";
}

export const Button: FC<ButtonProps> = ({
  endIcon,
  children,
  fullWidth,
  className,
  startIcon,
  size = "md",
  color = "primary",
  variant = "contained",
  ...restProps
}) => {
  return (
    <button
      data-size={size}
      data-color={color}
      data-variant={variant}
      data-full-width={fullWidth}
      className={`button__container flex-center gap-8 ${className}`}
      {...restProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
