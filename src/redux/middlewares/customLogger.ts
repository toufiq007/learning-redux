/* eslint-disable @typescript-eslint/no-explicit-any */
import { rootReducer } from "../rootReducer";
export const myLogger = (state: any) => (next: any) => (action: any) => {
  console.log(`Action type: ${JSON.stringify(action)}`);
  console.log(`Current state: ${JSON.stringify(state.getState())}`);

  const upcomingAction = [action].reduce(rootReducer, state.getState());

  console.log(`Next state: ${JSON.stringify(upcomingAction)}`);

  return next(action);
};
