import Rootreducer from "./redux/reduser/rootreducer";
import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk";
const Store=createStore(Rootreducer,applyMiddleware(Thunk))
export default Store;
// import ReduxThunk from "redux-Thunk";
// export const middlewares=[ReduxThunk];
// export const createwithmiddlewares=applyMiddleware(...middlewares)(createStore)
// export const Store=createwithmiddlewares(Rootreducer);
