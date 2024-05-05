type IinitialState = {
  value: number;
  properties: {
    a: number;
    b: number;
  };
};

const initialState: IinitialState = {
  value: 0,
  properties: {
    a: 20,
    b: 30,
  },
};

const checkPures = (state: IinitialState) => {
  return {
    ...state,
    properties: {
      ...state.properties,
      b: state.properties.b + 20,
    },
  };
};

console.log(checkPures(initialState));
