import React from "react"

function Button({title,clickHandlers}) {

    function onClick(event){
       event.preventDefault()
       if(clickHandlers){
        clickHandlers.forEach(handler => {
            handler(event)
        });
       }
    }

    return (<button onClick={onClick} className="button todo__button">
              {title}
            </button>)
}

export default Button