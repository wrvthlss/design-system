import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  initialBackgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  initialBackgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      style={{ 
        backgroundColor: initialBackgroundColor && initialBackgroundColor.startsWith('--')
          ? `var(${initialBackgroundColor})`
          : initialBackgroundColor,
      }}
      {...props}
      onMouseOver={(e) => {
        if (hoverBackgroundColor && hoverBackgroundColor.startsWith('--')) {
          e.currentTarget.style.backgroundColor = `var(${hoverBackgroundColor})`;
        }
      }}
      onMouseOut={(e) => {
        if (initialBackgroundColor && initialBackgroundColor.startsWith('--')) {
          e.currentTarget.style.backgroundColor = `var(${initialBackgroundColor})`;
        }
      }}
      onMouseDown={(e) => {
        if (activeBackgroundColor && activeBackgroundColor.startsWith('--')) {
          e.currentTarget.style.backgroundColor = `var(${activeBackgroundColor})`;
        }
      }}
      onMouseUp={(e) => {
        if (hoverBackgroundColor && hoverBackgroundColor.startsWith('--')) {
          e.currentTarget.style.backgroundColor = `var(${hoverBackgroundColor})`;
        }
      }}
    >
      {label}
    </button>
  );
};
