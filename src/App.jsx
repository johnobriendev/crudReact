import React, { useState } from 'react';
import './App.css'
import TodoInput from './Components/Input';
import TodoItem from './Components/Todo';

function App() {
  const [todos, setTodos] = useState([]); 
  
  const addTodo = (inputText) => {
    setTodos([
      ...todos,
      { id: Math.random(), text: inputText },
    ]);
  };
  

  return(
    <div className='app'>
      <TodoInput addTodo={addTodo}/>
    </div>
  );
}

export default App;
