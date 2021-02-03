import React from "react"


function Form({children}) {
    return (<form className="todo__form">
                {children}
            </form>)
}

export default Form