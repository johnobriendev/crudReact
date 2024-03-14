import React, { useState, useRef } from "react";


function TodoItem ({todo , removeTodo, editTodo}){
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    

    const handleEdit = () => {
        setIsEditing(!isEditing);
        //setEditText(todo.text);
    };
    const handleBlur = (event) => {
        if (event.type === 'blur' || event.key === 'Enter'){
            if (editText !== todo.text) {
                editTodo(todo.id, editText);
              }
              setIsEditing(false);
        }     
    };

    

    return (
        <li key={todo.id}> 
        
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={handleBlur}
                    
                    autoFocus
                />
                ) : (
                    <span onClick={handleEdit}>{todo.text}</span>
                    //todo.text
            )}

            <button onClick={() => removeTodo(todo.id)}>Delete</button>
            

        </li>
      );

      
}

export default TodoItem;

