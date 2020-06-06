import { createStore,combineReducers,applyMiddleware} from 'redux';
import logger from "redux-logger";
import headerReducer from "../reducers/HeaderPageReducer";

const store =  createStore(
    combineReducers({
        headerReducer
    }),
    applyMiddleware(logger)
);
export default store;