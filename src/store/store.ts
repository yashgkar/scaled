import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import createRootReducer from "./reducer";

export const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
  blacklist:  ["router"]
}

const persistedReducer = persistReducer<any>(
  persistConfig,
  createRootReducer(history)
);


const composeEnhancers = process.env.NODE_ENV === "development"
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export type AppDispatch = typeof store.dispatch;

const persistedStore = persistStore(store);

export { persistedStore };

export default store;