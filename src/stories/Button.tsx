import React, { useState, useEffect } from "react";
import "./button.css";
import { useDebounce } from "./useDebouce/useDebouce";

export interface ButtonProps {
  primary?: boolean;
  initialBackgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  showIcon?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  initialBackgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
  label,
  showIcon = false,
  ...props
}: ButtonProps) => {
  const debouncedInitialBackgroundColor = useDebounce(initialBackgroundColor, 300);
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    debouncedInitialBackgroundColor && debouncedInitialBackgroundColor.startsWith('--') 
      ? `var(${debouncedInitialBackgroundColor})` 
      : debouncedInitialBackgroundColor
  );

  useEffect(() => {
    setBackgroundColor(
      debouncedInitialBackgroundColor && debouncedInitialBackgroundColor.startsWith('--') 
        ? `var(${debouncedInitialBackgroundColor})` 
        : debouncedInitialBackgroundColor
    );
  }, [debouncedInitialBackgroundColor]);

  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";

  const baseStyle = primary
    ? { backgroundColor }
    : {
        backgroundColor: "transparent",
        color: "var(--anthem-brand-100)",
        border: "2px solid var(--anthem-brand-100)",
      };

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      style={baseStyle}
      {...props}
      onMouseOver={() => {
        if (hoverBackgroundColor && hoverBackgroundColor.startsWith('--')) {
          setBackgroundColor(primary ? `var(${hoverBackgroundColor})` : `var(--w100)`);
        }
      }}
      onMouseOut={() => {
        setBackgroundColor(
          debouncedInitialBackgroundColor && debouncedInitialBackgroundColor.startsWith('--') 
            ? primary ? `var(${debouncedInitialBackgroundColor})` : "transparent"
            : debouncedInitialBackgroundColor
        );
      }}
      onMouseDown={() => {
        if (activeBackgroundColor && activeBackgroundColor.startsWith('--')) {
          setBackgroundColor(primary ? `var(${activeBackgroundColor})` : `var(--anthem-brand-100)`);
        }
      }}
      onMouseUp={() => {
        if (hoverBackgroundColor && hoverBackgroundColor.startsWith('--')) {
          setBackgroundColor(primary ? `var(${hoverBackgroundColor})` : `var(--w100)`);
        }
      }}
    >
      {showIcon && <span className="icon"></span>}
      {label}
    </button>
  );
};
