import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO
} from "../actions/actions.types";

const initalState = {
  counter: 0,
  list: [{ id: 0, text: "Happy Hacking ~v~", completed: false }]
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.text, completed: false }
        ]
      };
    case CLEAR_TODO_LIST:
      return initalState;
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
};

export default todos;
