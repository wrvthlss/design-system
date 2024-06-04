import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";

  // Apply CSS variable if it starts with --
  const bgColor = backgroundColor && backgroundColor.startsWith('--')
    ? `var(${backgroundColor})`
    : backgroundColor;

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      {label}
    </button>
  );
};
