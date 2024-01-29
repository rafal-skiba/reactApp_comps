import { useState, useRef, useEffect } from "react";
import { GoBellFill } from "react-icons/go";

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.addEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);

    console.log(option);
  };

  const renderOptions = options.map((option, index) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        <GoBellFill />
        {value?.label || "Select..."}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-wite w-full">
          {" "}
          {renderOptions}
        </div>
      )}
    </div>
  );
}

export default DropDown;
