import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./commonApi/todoApi";

//상태 전달: props
function App() {
  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  //DB 연결
  // const baseUrl = "http://localhost:8090";

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(""); //state값과 value 속성과 연결

  //렌더링이 끝나고 호출이 되는 함수: useEffect()
  useEffect(() => {
    getTodos();
  }, []);
  
  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  //백엔드 DB에 접근해서 가지고 오는 작업
  async function getTodos() {
    //요청할 Url 작성
    await axios
    .get(baseUrl + "/todo/all")
    .then((response) => {
      // console.log(response.data);
      setTodos(response.data);
    }).catch((error) => console.log(error));
   
    
  }

  const insertTodo = async (e) => {
    e.preventDefault();
    axios.post(baseUrl + '/todo', {todoname:input}).then((response) => {
      console.log(response.data);
      setInput('');
      getTodos();
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const updateTodo = async(id,completed) => {
    await axios
    .put(baseUrl + '/todo/' + id+ '/' + completed)
    .then((response)=>{
      setTodos(todos.map((todo)=> todo.id===id 
        ? {...todo,completed: todo.completed === 1 ? 0: 1 }
        :todo
       )
      );
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        // setTodos(todos.filter((todo) => todo.id !== id)); -> 처리해주는 문장이 하나이면 return과 {}(중괄호) 생략 가능
        setTodos(
          todos.filter((todo) => {
            return todo.id !== id;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    console.log("input:" + input);
  }, [input]);

  return (
    <div className="App" style={wrap}>
      <h1>TODO-LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type="text"
          required={true}
          value={input} //state값이 value에 할당됨
          onChange={handleChangeText}
        />
        <input type="submit" value="Create" />
      </form>

      {todos
        ? todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <h3>
                  <label
                    className={todo.completed ? "completed" : null}
                    onClick={() => updateTodo(todo.id, todo.completed)}
                  >
                    {todo.todoname}
                  </label>

                  <label
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;삭제
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;