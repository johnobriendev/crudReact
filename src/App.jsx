import React, { useState } from 'react';
import './App.css'
import TodoInput from './Components/TodoInput';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]); 
  
  const addTodo = (inputText) => {
    setTodos([
      ...todos,
      { id: Math.random(), text: inputText },
    ]);
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  

  return(
    <div className='app'>
      <div>
        <h4>Pending Tasks</h4>
        <p>Click to Edit</p>
      </div>
      
      <TodoInput addTodo={addTodo}/>
      <ul>
      {todos.map((todo) => (
        <TodoItem 
        key={todo.id} 
        todo={todo} 
        removeTodo={removeTodo} 
        editTodo={editTodo} />
      ))}
    </ul>
    </div>
  );
}

export default App;


