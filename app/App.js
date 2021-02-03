import appStore from "./store/AppStore"
import toDos from "./store/state"
import React from "react"
import ReactDOM from "react-dom"
import ToDoPage from "../modules/task-management/pages/ToDoPage"

function runApp(){
    /*appStore.eventManager.subscribe('toDosChanged',(data)=>{
     
    })*/

    ReactDOM.render(<ToDoPage/>,document.getElementById("app"))
}

runApp()