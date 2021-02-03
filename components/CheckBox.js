import React from "react"

function CheckBox({label,idCheckBox}){

    return (<div className="checkbox__wrapper">
              <label htmlFor={idCheckBox}>{label}</label>
              <input type="checkbox" id={idCheckBox}/>
            </div>)
}

export default CheckBox