import React, { useState } from 'react';
import './App.css'
import todoInput from './Components/Input';

function App() {
  const [todos, setTodos] = useState([]); // Array to store todos
  
  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Math.random(), text: text },
    ]);
  };
  

  return(
    <div className='app'>
      <todoInput addTodo={addTodo}/>
    </div>
  );
}

export default App;
