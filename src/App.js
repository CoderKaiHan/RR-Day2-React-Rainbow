import React, {useState} from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import './App.css';

function App(){
    let [colors, setColors] = useState(['']);
    
    let colorMap = colors.map((color,i)=>{
      return (
        <ColorBlock color={color} key = {i}/>
      );
    });

    const addColor = (newColor)=>{
      setColors([...colors, newColor]);
    }

    return(
      <div className='App'>
        <header className='App-header'>Type in your color to make a rainbow!</header>
        {colorMap}
        <ColorForm addColor={addColor}/>
      </div>
    );
}


export default App;
