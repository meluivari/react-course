import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export function PlaygroundHooks() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const expensiveValue = computeExpensive(counter2);

  return (
    <div className="flex flex-col gap-2">
      <Button label="Increment 1" onClick={() => setCounter1(counter1 + 1)} />
      <Button label="Increment 2" onClick={() => setCounter2(counter2 + 1)} />
      <p>{`Counter 1: ${counter1}`}</p>
      <p>{`Counter 2: ${counter2}`}</p>
      <p>{`Expensive value: ${expensiveValue}`}</p>
    </div>
  );
}

function computeExpensive(num: number) {
  console.log("Compute expansive ...");
  const time = performance.now();
  while (performance.now() - time < 200) {}
  return num * 100;
}



function ExpensiveComponent() {
  let renderCount = 0;
  useEffect(() => {
    console.log("Render expensive component");
    renderCount++;
  });
  return (
    <Card>
      <p>{`Expensive component, rendered ${renderCount} times`}</p>
    </Card>
  );
}
