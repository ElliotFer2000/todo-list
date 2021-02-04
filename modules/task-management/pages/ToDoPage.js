import React, { useState, useEffect } from "react"
import Header from "../../../components/Header"
import Form from "../../../components/Form"
import TextInput from "../../../components/TextInput"
import appStore from "../../../app/store/AppStore"
import List from "../../../components/List"
import ListItem from "../../../components/ListItem"
import CheckBox from "../../../components/CheckBox"
import Button from "../../../components/Button"
import ToDo from "../models/ToDo"

function ToDoPage() {
  const [todos, setTodos] = useState([])

  //addTodoItem,removeToDo and markToDoAsFinished are event handlers
  function addTodoItem() {
    if (todoInput.value) {
      const todo = new ToDo(todoInput.value, false)
      appStore.dispatch('addToDoItem', todo)
    } else {
      alert("Debes escribir una tarea!")
    }
  }

  function removeToDo(event) {
    if (event.target.parentElement.parentElement.id) {
      appStore.dispatch('deleteToDoItem', event.target.parentElement.parentElement.id)
    }
  }

  function markToDoAsFinished(event) {
    appStore.dispatch('markToDoItemAsFinished', event.target.parentElement.parentElement.parentElement.id)
  }
  //End of event handlers

  useEffect(function () {
    appStore.eventManager.subscribe('toDosChanged', function (data) {
      setTodos(data)
    })
  }, [])

  return (<section className="todo">
    <Header heading="Task Manager" />
    <Form>
      <TextInput label="Write a todo" id="todoInput" />
      <Button title="Add Todo" clickHandlers={[addTodoItem]} />
    </Form>
    <List>
      {todos.map((value, index, array) => {
        return (<ListItem title={value.title} key={index} markTitle={value.state} idListItem={index}>
          <div className="todo__flex-wrapper">
            <CheckBox label="Mark as finished" idCheckBox="toDoCheck" clickHandlers={[markToDoAsFinished]} />
            <Button title="Delete" clickHandlers={[removeToDo]} />
          </div>
        </ListItem>)
      })}
    </List>
  </section>)
}

export default ToDoPage