import React from "react";
import { useState } from "react";

function TodoItem ({todo , removeTodo}){
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        setEditText(todo.text);
      };

    return (
        <li key={todo.id}> 
        
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
                ) : (
                {todo.text}
                )}
            
            <button onClick={handleEdit}> {isEditing ? 'Save' : 'Edit'} </button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      );
}

export default TodoItem;