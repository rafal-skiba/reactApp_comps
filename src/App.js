import Button from "./components/Button";
import { GoBellFill, GoCheckCircleFill } from "react-icons/go";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
import DropDown from "./components/Dropdown";

function App() {
  const items = [
    {
      label: "Can i use React?",
      content: "You can use React in any project you want",
    },
    {
      label: "Can i use JS?",
      content: "You can use JS in any project you want",
    },
    {
      label: "Can i use CSS?",
      content: "You can use Css in any project you want",
    },
  ];

  const options = [
    {
      label: "red",
      value: "redcolor",
    },
    {
      label: "green",
      value: "greencolor",
    },
    {
      label: "orange",
      value: "orangecolor",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
      <DropDown options={options} />
      <ButtonPage />
    </div>
  );
}

export default App;
