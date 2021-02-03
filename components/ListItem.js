import React from "react"

function ListItem({title,children}) {
    
    return (<li className="list__item todo__list-item">
              {title}
              {children}
            </li>)
}

export default ListItem