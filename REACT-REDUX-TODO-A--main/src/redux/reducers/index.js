import { combineReducers } from "redux";

// import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
