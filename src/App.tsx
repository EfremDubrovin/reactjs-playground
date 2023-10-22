import { useState } from "react";
import Button from "./components/counter/Button";
import CounterBox from "./components/counter/CounterBox";

function App() {
  let [counter, updateCounter] = useState(0);

  return (
    <div>
      <Button oldCounterValue={counter} updateCounter={updateCounter} />
      <CounterBox counter={counter}></CounterBox>
    </div>
  );
}

export default App;
