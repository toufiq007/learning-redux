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
      <div className="text-4xl my-5 py-5">
        count: <span className="font-bold">{count}</span>
      </div>
      <div className="counter-btns my-5">
        <button
          onClick={() => handleIncrement(id)}
          className="px-4 py-2 mr-5 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Increment
        </button>

        <button
          onClick={() => handleDecrement(id)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
