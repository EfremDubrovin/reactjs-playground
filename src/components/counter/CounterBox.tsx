interface Props {
  counter: number;
}

function CounterBox({ counter }: Props) {
  return <>Counter value: {counter}</>;
}

export default CounterBox;
