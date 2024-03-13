import React from "react";

function TodoItem ({todo , removeTodo}){
    return (
        <li key={todo.id}> 
        {todo.text}
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
         </li>
      );
}

export default TodoItem;