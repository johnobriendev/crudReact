import React, { useState } from 'react';


function todoInput({addTodo}){
    
    const [inputText, setInputText] = useState('');
    
    return(
        <form>
            <input 
            type="text"
            value = {inputText}
            onChange={(e) => setText(e.target.value)}
            placeholder='Write something...'

            />
            <button type='submit'>Add</button>
        </form>
    );
}