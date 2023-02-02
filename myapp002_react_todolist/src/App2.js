import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './commonApi/todoApi'; //todoApi에있는 baseUrl을 가지고오기위한 import
import Input from './components/input2';
import Todo from './components/todo2';
import { InputContext } from './contexts/InputContext';
import { TodoContext } from './contexts/TodoContext';

//상태 전달: Context Api + useContext()
function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  //DB 연결
  // const baseUrl = 'http://localhost:8090';

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(''); //state값과 value 속성과 연결

  //렌더링이 끝나고 호출이되는 함수 useEffect
  useEffect(() => {
    getTodos();
  }, []);

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  //DB에 접근해서 가지고 오는 작업
  async function getTodos() {
    await axios
      .get(baseUrl + '/todo/all')
      .then((Response) => {
        //요청하게되면 요청한 결과값을 받는게 then이다 response는 변수다(백엔드에서 받은)
        // console.log(Response.data);
        //Todos에 담아 처리해야한다.
        console.log('11111111111111111111');
        setTodos(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('b22222222222222222222222'); //->그냥 function으로하면 얘가 먼저처리가된다 비동기화 처리 때문에 동기화처리를 해줘야한다.->async await axios
  }

  const insertTodo = async (e) => {
    //todos에 넣으면안된다 db에 넣어야한다.
    e.preventDefault();
    await axios
      .post(baseUrl + '/todo', { todoname: input })
      .then((Response) => {
        console.log(Response.data);
        setInput('');
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      }); //백엔드에서 post로 요청했을때 처리하라고 되있기 때문에 같게 post로 넘긴다. input을 넘긴다
    console.log('할일이 추가됨!!');
  };

  //수정하기
  const updateTodo = async (id, completed) => {
    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((Response) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
              : todo
          )
        ); //todos에 저장되어있는것만 변경한다. 굳이 수정된 db를 가져오지 않는다 id에 해당하는 값만 바꿔버린다.
      })
      .catch((error) => {
        console.log(error);
      }); //백엔드에서 post로 요청했을때 처리하라고 되있기 때문에 같게 post로 넘긴다. input을 넘긴다
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((reponse) => {
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
    console.log('input:' + input);
  }, [input]);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST 2(Context API)</h1>
      <InputContext.Provider value={{input, insertTodo, handleChangeText}}>
      <Input
        input={input}
        insertTodo={insertTodo}
        handleChangeText={handleChangeText}
      />
      </InputContext.Provider>
      <TodoContext.Provider value={{todos, updateTodo, deleteTodo}}>
      <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;