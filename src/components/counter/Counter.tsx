import Button from "./Button";
import Count from "./Count";

type CounterType = {
  id: number;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  count: number;
};

const Counter = ({
  handleIncrement,
  handleDecrement,
  count,
  id,
}: CounterType) => {
  return (
    <div className="text-center my-8 bg-slate-300 w-[50%]  mx-auto p-10">
      <Count count={count} />
      <div className="counter-btns my-5 flex justify-center gap-x-5">
        <Button
          styles="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          handler={() => handleIncrement(id)}
          id={id}
        >
          Increment
        </Button>

        <Button
          styles="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
          handler={() => handleDecrement(id)}
          id={id}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
