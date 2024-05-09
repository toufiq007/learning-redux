// import Counter from "./components/counter2/Counter";
import HooksCounter from "./components/counter2/HooksCounter";
import DynamicHooksCounter from "./components/counter2/DynamicHooksCounter";

function App() {
  return (
    <>
      {/* <CounterContainer/> */}
      {/* <Counter newValue={1} id="1" /> */}
      <HooksCounter />
      <DynamicHooksCounter />
    </>
  );
}

export default App;
