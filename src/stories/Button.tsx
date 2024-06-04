import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  initialBackgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  showIcon?: boolean;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  initialBackgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
  label,
  showIcon = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  
  const baseStyle = primary 
    ? {
        backgroundColor: initialBackgroundColor && initialBackgroundColor.startsWith('--')
          ? `var(${initialBackgroundColor})`
          : initialBackgroundColor,
      }
    : {
        backgroundColor: "transparent",
        color: "var(--p100)",
        border: "2px solid var(--p100)"
      };

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      style={baseStyle}
      {...props}
      onMouseOver={(e) => {
        if (hoverBackgroundColor && hoverBackgroundColor.startsWith('--')) {
          e.currentTarget.style.backgroundColor = primary ? `var(${hoverBackgroundColor})` : `var(--w100)`;
        }
      }}
      onMouseOut={(e) => {
        if (initialBackgroundColor && initialBackgroundColor.startsWith('--')) {
          e.currentTarget.style.backgroundColor = primary ? `var(${initialBackgroundColor})` : "transparent";
          e.currentTarget.style.color = !primary ? `var(--p100)` : "";
          e.currentTarget.style.border = !primary ? `2px solid var(--p100)` : "";
        }
      }}
      onMouseDown={(e) => {
        if (activeBackgroundColor && activeBackgroundColor.startsWith('--')) {
          e.currentTarget.style.backgroundColor = primary ? `var(${activeBackgroundColor})` : `var(--p100)`;
          e.currentTarget.style.color = !primary ? `var(--w100)` : "";
        }
      }}
      onMouseUp={(e) => {
        if (hoverBackgroundColor && hoverBackgroundColor.startsWith('--')) {
          e.currentTarget.style.backgroundColor = primary ? `var(${hoverBackgroundColor})` : `var(--w100)`;
        }
      }}
    >
      {showIcon && <span className="icon"></span>}
      {label}
    </button>
  );
};
