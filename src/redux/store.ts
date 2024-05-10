import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { myLogger } from "./middlewares/customLogger";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger, logger))
);

export default store;
