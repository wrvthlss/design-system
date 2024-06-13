import React, { useState } from "react";
import "./checkbox.css";

interface CheckboxProps {
  initialBackgroundColor?: string;
  hoverBackgroundColor?: string;
  selectedBackgroundColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  disabled?: boolean;
}

export const Checkbox = ({
  initialBackgroundColor = "var(--w100)",
  hoverBackgroundColor = "var(--p100)",
  selectedBackgroundColor = "var(--p200)",
  height = "24px",
  width = "24px",
  borderRadius = "8px",
  disabled = false,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!checked) {
      (e.currentTarget as HTMLElement).style.backgroundColor = hoverBackgroundColor;
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!checked) {
      (e.currentTarget as HTMLElement).style.backgroundColor = initialBackgroundColor;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      setChecked(!checked);
      (e.currentTarget as HTMLElement).style.backgroundColor = checked ? initialBackgroundColor : selectedBackgroundColor;
    }
  };

  return (
    <div
      className={`checkbox ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}`}
      style={{
        backgroundColor: checked ? selectedBackgroundColor : initialBackgroundColor,
        height,
        width,
        borderRadius,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
    >
      {checked && <span className="checkmark"></span>}
    </div>
  );
};
