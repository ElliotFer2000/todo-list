import React from "react"

function ListItem({ title, children, markTitle, idListItem }) {

  return (<li className="list__item todo__list-item" id={idListItem}>
    <span className={`list__item-title ${(markTitle ? "todo__finished" : "")}`}>
      {title}
    </span>
    {children}
  </li>)
}

export default ListItem