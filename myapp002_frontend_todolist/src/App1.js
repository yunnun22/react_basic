import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
//.js확장명은 생략가능
import Input from './components/input1';
import Todo from './components/todo1';


//상태전달 : props
function App() {
    const wrap = {
      width: '500px',
      border: '1px solid black',
      margin: '10px auto',
    };
  
    let boardList = [
      { id: 1, todoname: '운동하기', completed: 0 },
      { id: 2, todoname: 'SNS꾸미기', completed: 0 },
      { id: 3, todoname: '사진정리하기', completed: 0 },
    ];
  
    const [todos, setTodos] = useState([...boardList]);
    const [input, setInput] = useState('');
  
    const insertTodo = (e) => {
      e.preventDefault();
      // input에 있는 값을 todos에 추가
      // 배열형식
      setTodos([
        { id: todos.length + 1, todoname: input, completed: 0 },
        ...todos,
      ]);
  
      // 초기화
      setInput('');
    };
  
    const handleChangeText = (e) => {
      // 입력
      setInput(e.target.value);
    };
  
    // const updateTodo = () => {}; 64열 파라미터값 써줘야 함
  
    const updateTodo = (id) => {
      // return 생략가능 setTodos(todos.map(() => {return}));
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, completed: todo.completed == 1 ? 0 : 1 }
            : todo
        )
      );
    };
  
    const deleteTodo = (id) => {
      // setTodos(todos.filter((todo)=> todo.id !== id));
      //리턴과 중괄호 생략 가능
       setTodos(todos.filter((todo)=> {
        return todo.id !== id
      })
    );
  
    };
  
    useEffect(() => {
      console.log('input' + input);
    }, [input]);
  
    return (
      <div className='App' style={wrap}>
        <h1>TODO LIST</h1>
            <Input 
             input={input}
             insertTodo={insertTodo} 
             handleChangeText ={handleChangeText}/>
          
          <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      </div>
    );
  }
  
  export default App;
  