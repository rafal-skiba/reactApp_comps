import Button from "../components/Button";
import { GoBellFill, GoCheckCircleFill } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button className="mb-5" onClick={handleClick} primary>
          <GoBellFill />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCheckCircleFill />
          Click next
        </Button>
      </div>
      <div>
        <Button success>Click other</Button>
      </div>
      <div>
        <Button warning>Click other</Button>
      </div>
      <div>
        <Button danger>Click other</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
