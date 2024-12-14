import React, { useState } from "react";

const TextInput = ({ label, placeholder, value, onChange, isNumberOnly }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (isNumberOnly && inputValue && !/^\d*$/.test(inputValue)) {
      setError("Only numeric values are allowed.");
    } else {
      setError("");
      if (onChange) {
        onChange(inputValue);
      }
    }
  };

  const inputId = label ? label.replace(/\s+/g, "-").toLowerCase() : "text-input";

  return (
    <div className="flex w-full h-full max-w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-[14px] font-normal leading-[19.6px]"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type="text"
        value={value || ""}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border flex h-full w-full max-w-full  px-4 py-2 rounded-md focus:ring-2 focus:outline-none ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default TextInput;