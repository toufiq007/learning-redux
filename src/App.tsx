import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Stat from "./components/counter/Stat";

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

function App() {
  const [state, setState] = useState(initialState);
  const totalCount = state.reduce((accumulator, singleState) => {
    return accumulator + singleState.count;
  }, 0);
  const handleIncrement = (id: number) => {
    const updateCounter = state.map((singleState) => {
      if (singleState.id === id) {
        return {
          ...singleState,
          count: singleState.count + 1,
        };
      }
      return { ...singleState };
    });
    setState(updateCounter)
  };
  const handleDecrement = (id:number) => {
    const updateCounter = state.map((singleState) => {
      if (singleState.id === id) {
        return {
          ...singleState,
          count: singleState.count - 1,
        };
      }
      return { ...singleState };
    });
    setState(updateCounter)
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
}

export default App;
