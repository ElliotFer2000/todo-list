import React from "react"


function TextInput({label,id}) {
    return (<div>
              <label for={id} className="label">{label}</label>
              <input type="text" id={id} className="text-input todo__text-input"/>
            </div>)
}

export default TextInput