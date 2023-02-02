import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./commonApi/todoApi"; //todoApi에있는 baseUrl을 가지고오기위한 import
import Input from "./components/input3";
import Todo from "./components/todo3";
import { InputContext } from "./contexts/InputContext";
import { TodoContext } from "./contexts/TodoContext";
import { Provider } from "react-redux";
import { store } from "./reduxs/store";

//상태 전달: Redux + useSelector() + useDispatch()
function App() {
  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  //DB 연결
  // const baseUrl = 'http://localhost:8090';

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST 3(Redux)</h1>
      <Provider store={store}>
        <Input />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;