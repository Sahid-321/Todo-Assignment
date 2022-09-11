import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/index";

const TodoInput = () => {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    event.preventDefault();
  };

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            name="todo"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </div>
        <button
          className="btn btn-block btn-primary mt-3"
          onClick={handleSubmit}
        >
          add item
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
