import { ADD_COUNTER, RESET_COUNTER } from "../actions/actions.types";

const initalState = {
  amount: 0,
  name: "sahid"
};

const counter = (state = initalState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        amount: ++state.amount
      };
    case RESET_COUNTER:
      return {
        amount: action.count
      };
    default:
      return state;
  }
};

export default counter;
