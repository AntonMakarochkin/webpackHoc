import React from 'react';
import { useState } from 'react';

function Hoc(displayName, resourse) {
  
  return function functionName({title, formula, information }) {
    const [popup, setPopup] = useState(false);
    console.log(title, 'title');
    functionName.displayName = displayName;

     return (
      <div className='resource'>
        <h4 className='h1__title'>{title}</h4>
        <p>{formula}</p>
        <div>{resourse}</div>
        <button type="button" onClick={() => setPopup(!popup)}>Дополнительная информация</button>
        {popup ? <div>{information}</div> : null }
      </div>
     );
  }
}
export default Hoc