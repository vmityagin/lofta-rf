import React from 'react';

function Input() {
  
  return (
    <div className="number">
      <input className="number__input" type="number" max={300} min={50} step={1} placeholder="Введите длину в см" ></input>
    </div>
  );
}

export default Input;