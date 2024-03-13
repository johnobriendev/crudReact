import React from "react";

function TodoItem ({todo , removeTodo}){
    return (
        <li key={todo.id}> 
        {todo.text} </li>
      );
}

export default TodoItem;