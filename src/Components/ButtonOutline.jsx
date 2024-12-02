import React from 'react';

// Button component accepts props
const ButtonOutline = ({ label, onClick, style, disabled }) => {
  return (
    <button
      onClick={onClick}       // Pass the click handler from props
      style={style}           // Apply custom styles if provided
      disabled={disabled}     // Disable button if "disabled" is passed
      className="py-[11.5px] px-[25.5px] border border-primaryColor
           text-primaryColor font-medium text-[15px] leading-[21px] rounded-[4px]"
    >
      {label}  {/* Display label passed as a prop */}
    </button>
  );
}

export default ButtonOutline;