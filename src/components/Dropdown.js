import { useState } from "react";

function DropDown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderOptions = options.map((option, index) => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div> {renderOptions}</div>}
    </div>
  );
}

export default DropDown;
