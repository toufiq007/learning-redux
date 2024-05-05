import { INCREMENT, DECREMENT } from "./actionsTypes";

export const initialState = {
  value: 0,
};

type actionsTypes = {
  type: string;
  payload: number;
};

export const counterReducer = (state = initialState, action: actionsTypes) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
