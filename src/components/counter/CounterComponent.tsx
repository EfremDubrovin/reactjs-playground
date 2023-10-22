import { useState } from "react";
import Button from "./Button";
import CounterBox from "./CounterBox";

function CounterComponent() {
  let [counter, updateCounter] = useState(0);
  return (
    <>
      <Button oldCounterValue={counter} updateCounter={updateCounter} />
      <CounterBox counter={counter}></CounterBox>
    </>
  );
}

export default CounterComponent;
