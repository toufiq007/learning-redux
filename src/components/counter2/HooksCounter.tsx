/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";

const HooksCounter = () => {
  const count = useSelector((state: any) => state?.counter?.value);
  const dispatch = useDispatch();

  const incrementFunc = () => {
    dispatch(increment());
  };
  const decrementFunc = () => {
    dispatch(decrement());
  };

  return (
    <div className="text-center my-8 bg-slate-300 w-[50%]  mx-auto p-10">
      <h2>Hooks Counter</h2>
      <div className="text-4xl my-5 py-5">
        count: <span className="font-bold">{count}</span>
      </div>
      <div className="counter-btns my-5 flex justify-center gap-x-5">
        <button
          onClick={incrementFunc}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Increment
        </button>

        <button
          onClick={decrementFunc}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HooksCounter;
