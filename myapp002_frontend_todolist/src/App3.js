import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
//.js확장명은 생략가능
import Input from './components/input3';
import Todo from './components/todo3';
import { Provider } from 'react-redux';
import { store } from './reduxs/store'


//상태전달 : Redux + useSelector() + useDispatch()
function App() {
    const wrap = {
      width: '500px',
      border: '1px solid black',
      margin: '10px auto',
    };

    return (
      <div className='App' style={wrap}>
        <h1>TODO LIST 3(Redux)</h1>

       <Provider store={store}>
         <Input/>

         <Todo />
        </Provider>
      </div>
    );
  }
  
  export default App;
  