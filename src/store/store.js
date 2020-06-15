import { createStore,combineReducers,applyMiddleware} from 'redux';
import logger from "redux-logger";
import headerReducer from "../reducers/HeaderPageReducer";
import CardReducer from "../reducers/CardReducer";

const rootReducer = combineReducers({
    headerReducer,CardReducer
})

const store =  createStore(headerReducer,
    applyMiddleware(logger)
);
export default store;