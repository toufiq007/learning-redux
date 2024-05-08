/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";

type CounterType = {
  count: number;
  newValue: number;
  id: string;
  incrementFunc: (value: number) => void;
  decrementFunc: (value: number) => void;
};

export const Counter = ({
  count,
  incrementFunc,
  decrementFunc,
}: CounterType) => {
  return (
    <div className="text-center my-8 bg-slate-300 w-[50%]  mx-auto p-10">
      <div className="text-4xl my-5 py-5">
        count: <span className="font-bold">{count}</span>
      </div>
      <div className="counter-btns my-5 flex justify-center gap-x-5">
        <button
          onClick={() => incrementFunc(10)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Increment
        </button>

        <button
          onClick={() => decrementFunc(10)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { value: number }, ownProps:{newValue:number,id:string}) => {
  console.log(ownProps.newValue);
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    incrementFunc: (value: number) => dispatch(increment(value)),
    decrementFunc: (value: number) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
