import React, { useState } from "react";
import "./checkbox.css";

interface CheckboxProps {
  initialColor?: string;
  hoverColor?: string;
  checkedColor?: string;
  disabled?: boolean;
  label: string;
}

export const Checkbox = ({
  initialColor = "white",
  hoverColor,
  checkedColor,
  disabled = false,
  label,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleMouseOver = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!isChecked && hoverColor && !disabled) {
      e.currentTarget.style.backgroundColor = hoverColor.startsWith('--') ? `var(${hoverColor})` : hoverColor;
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!isChecked && initialColor && !disabled) {
      e.currentTarget.style.backgroundColor = initialColor.startsWith('--') ? `var(${initialColor})` : initialColor;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsChecked(e.target.checked);
      e.currentTarget.style.backgroundColor = e.target.checked
        ? (checkedColor && (checkedColor.startsWith('--') ? `var(${checkedColor})` : checkedColor)) || ""
        : (initialColor && (initialColor.startsWith('--') ? `var(${initialColor})` : initialColor)) || "";
    }
  };

  return (
    <div className="storybook-checkbox-wrapper">
      <label className="storybook-checkbox-label">
        <input
          type="checkbox"
          className="storybook-checkbox"
          style={{
            backgroundColor: initialColor && initialColor.startsWith('--') ? `var(${initialColor})` : initialColor,
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        {isChecked && !disabled && <span className="checkmark"></span>}
        {label}
      </label>
    </div>
  );
};
