import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { myLogger } from "./middlewares/customLogger";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(myLogger, logger));

export default store;
