import { INCREMENT, DECREMENT } from "./actionsTypes";

export const increment = (value: number) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value: number) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
