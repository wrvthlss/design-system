import React, { useState } from "react";
import "./dropdown.css";

interface DropdownProps {
  options: string[];
  initialBackgroundColor: string;
  hoverTextColor: string;
  disabled: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  initialBackgroundColor,
  hoverTextColor,
  disabled,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${disabled ? "select-disabled" : ""}`} style={{ backgroundColor: initialBackgroundColor }}>
      <div className="select-selected" onClick={toggleDropdown}>
        {selected || "Select an option"}
      </div>
      <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
        {options.map((option) => (
          <div
            key={option}
            onClick={() => selectOption(option)}
            style={{ "--hover-text-color": hoverTextColor } as React.CSSProperties}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
