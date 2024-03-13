import React from "react";
import { useState } from "react";

function TodoItem ({todo , removeTodo}){
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        setEditText(todo.text);
    };
    const handleBlur = () => {
        if (editText !== todo.text && isEditing) {
          editTodo(todo.id, editText);
        }
        setIsEditing(false);
    };

    

    return (
        <li key={todo.id}> 
        
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleBlur}
                />
                ) : (
                (todo.text)
            )}

            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
            

        </li>
      );

      
}

export default TodoItem;