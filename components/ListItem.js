import React from "react"

function ListItem({title,controls}) {
    
    return (<li>
              {title}
              {controls}
            </li>)
}

export default ListItem