import { useState } from "react";

interface BohProps {
  name: string;
}

function Boh({ name }: BohProps) {
  const [colour1, setColour1] = useState("green");
  function switchColour() {
    setColour1("black");
  }

  return (
    <div
      style={{
        backgroundColor: colour1,
        height: 40,
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }}
      onClick={switchColour}
    >
      Ok micols website {name}
    </div>
  );
}

export default Boh;
