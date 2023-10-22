import { ReactNode, MouseEvent } from "react";

interface Props {
  oldCounterValue: number;
  updateCounter: (counter: number) => void;
}

function updateCounterValue({ oldCounterValue, updateCounter }: Props) {
  let newCounterValue = oldCounterValue + 1;
  console.log("New counter value:" + newCounterValue);
  updateCounter(newCounterValue);
}

function Button(props: Props) {
  return (
    <button onClick={(event) => updateCounterValue(props)}>Click me</button>
  );
}

export default Button;
