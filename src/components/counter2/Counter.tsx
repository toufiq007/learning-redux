/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";

const Counter = ({
  count,
  increment,
  decrement,
}: {
  count: number;
  increment: any;
  decrement: any;
}) => {
  return (
    <div className="text-center my-8 bg-slate-300 w-[50%]  mx-auto p-10">
      <div className="text-4xl my-5 py-5">
        count: <span className="font-bold">{count}</span>
      </div>
      <div className="counter-btns my-5 flex justify-center gap-x-5">
        <button
          onClick={()=> increment(10)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Increment
        </button>

        <button
          onClick={()=> decrement(10)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const maptStateToProps = (state: { value: number }) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: (value: number) => dispatch(increment(value)),
    decrement: (value: number) => dispatch(decrement(value)),
  };
};
export default connect(maptStateToProps, mapDispatchToProps)(Counter);
