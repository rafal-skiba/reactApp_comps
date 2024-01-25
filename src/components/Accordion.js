import { useState } from "react";
import { GoChevronLeft, GoArrowDown } from "react-icons/go";

function Accordion({ items }) {
  const [expendedIndex, setExpendedIndex] = useState(-1);

  const handleClick = (newIndex) => {
    if (expendedIndex === newIndex) {
      setExpendedIndex(-1);
    } else setExpendedIndex(newIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpandedIndex = expendedIndex === index;

    const icon = (
      <span className="text-2xl">
        {isExpandedIndex ? <GoArrowDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={index}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        <div>
          {isExpandedIndex && (
            <div className="border-b p-5">{item.content}</div>
          )}
        </div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
