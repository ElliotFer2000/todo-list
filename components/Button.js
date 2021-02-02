import React from "react"

function Button({title,events}) {
    
    function onClick(event){
       if(events){
        events.forEach(handler => {
            handler(event)
        });
       }
    }

    return (<button onClick={onClick}>
              {title}
            </button>)
}

export default Button