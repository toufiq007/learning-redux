import { useState } from "react";
import Counter from "./Counter";
import Stat from "./Stat";

const initialState = [
  {
    id: 1,
    count: 2,
  },
  {
    id: 2,
    count: 3,
  },
];

const CounterContainer = () => {
  const [state, setState] = useState(initialState);
  const totalCount = state.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );
  const handleIncrement = (id: number) => {
    const updateState = state.map((singleState) => {
      if (singleState.id === id) {
        return {
          ...singleState,
          count: singleState.count + 1,
        };
      }
      return {
        ...singleState,
      };
    });
    setState(updateState);
  };
  const handleDecrement = (id: number) => {
    const updateState = state.map((singleState) => {
      if (singleState.id === id) {
        return {
          ...singleState,
          count: singleState.count - 1,
        };
      }
      return { ...singleState };
    });
    setState(updateState);
  };

  console.log(totalCount);

  return (
    <>
      <h2 className="text-4xl text-center my-3">Simple Counter App</h2>
      {state.map((singleState, index) => {
        return (
          <Counter
            key={index}
            id={singleState.id}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            count={singleState.count}
          />
        );
      })}
      <Stat totalCount={totalCount} />
    </>
  );
};

export default CounterContainer;
