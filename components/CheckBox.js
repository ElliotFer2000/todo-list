import React from "react"

function CheckBox({label,idCheckBox,clickHandlers}){
  function onClick(event){
    if(clickHandlers){
     clickHandlers.forEach(handler => {
         handler(event)
     });
    }
  }
  
  return (<div className="checkbox__wrapper">
              <label htmlFor={idCheckBox} className="todo__label">{label}</label>
              <input type="checkbox" id={idCheckBox} onClick={onClick}/>
          </div>)
}

export default CheckBox