import React from "react"
import ReactDOM from "react-dom"
import ToDoPage from "../modules/task-management/pages/ToDoPage"

function runApp(){
    ReactDOM.render(<ToDoPage/>,document.getElementById("root"))
}

runApp()