import React, { useState } from "react"

function List(props) {

  return (<ul className="list todo__list">
           {props.children}
  </ul>)
}

export default List