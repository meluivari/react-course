import { useState } from "react";
import { Button } from "../components/Button";

export function ComponentsPlayground() {
  return (
    <div>
      <Counter label="Outer" />
      <Parent1 />
      <Parent2 />
    </div>
  );
}

function Counter({ label }: { label: string }) {
  console.log("RENDER COUNTER", label);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((val) => val + 1);
  };

  return (
    <div>
      <button className="m-3 p-2 bg-blue-400" onClick={increment}>
        Increment
      </button>
      <span>
        Counter({label}) : {count}
      </span>
    </div>
  );
}

function Parent1() {
  console.log("Render Parent 1");
  const [, setDate] = useState(0);

  return (
    <div>
      <Button
        label="Update Parent1"
        onClick={() => setDate(new Date().getTime())}
      />
      <Counter label="Inner" />
    </div>
  );
}

function Parent2() {
  console.log("Render Parent 2");
  const [date, setDate] = useState(0);

  return (
    <div>
      <Button label="Update" onClick={() => setDate(new Date().getTime())} />
      <Counter label={"Inner" + date} />
    </div>
  );
}
