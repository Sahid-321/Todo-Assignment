import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./redux/reducers/index";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(RootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            {/* <h1 className="text-capitalize text-center">Kelvin Todo List</h1> */}
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
