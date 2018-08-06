import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import combined from "./reducers";
import rootSaga from "./reducers/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combined,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
