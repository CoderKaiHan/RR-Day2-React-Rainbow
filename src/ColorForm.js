import React, { useState } from 'react';
import Valid_colors from './Valid_colors';

function ColorForm(props){
    let [input, setInput] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const isInputValues = (input) =>{
            return Object.values(Valid_colors).includes(input);
        }
        const isInputKeys = (input) =>{
            return Object.keys(Valid_colors).includes(input);
        }

        if (isInputValues(input) || isInputKeys(input)) {
            props.addColor(input);
            setInput('');
        } else {
            alert ('Please type in a valid color name! Color names must start with a uppercase letter and following with lowercase letters!');
            setInput('');
        }
    }

    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <input type="text" value={input}
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    );
}

export default ColorForm;
