import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import { TokenFlags } from "typescript";
import TokenService from "../services/TokenService";

const create = () => {
  const token = TokenService.get();

  const SagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(SagaMiddleware, routerMiddleware(history))
    )
  );

  SagaMiddleware.run(rootSaga);

  return store;
};

export default create;
