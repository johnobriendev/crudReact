import React, { useState } from 'react';


function TodoInput({addTodo}) {
    
    const [inputText, setInputText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputText){
            addTodo(inputText);
            setInputText ('');
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value = {inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Write something...'
            />
            <button type='submit'>Add</button>
        </form>
    );
}

export default TodoInput;