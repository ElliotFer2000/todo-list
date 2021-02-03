import React from "react"
import Header from "../../../components/Header"
import List from "../../../components/List"
import ListItem from "../../../components/ListItem"
import Button from "../../../components/Button"
import CheckBox from "../../../components/CheckBox"
import Form from "../../../components/Form"
import TextInput from  "../../../components/TextInput"


function ToDoPage(){

   return (<section className="todo">
               <Header heading="Task Manager"/>
               
               <Form>
                  <TextInput label="Write a todo" id="todoInput"/>
                  <Button title="ADD TODO"/>
               </Form>

               <List>
                   <ListItem title="Do Laundry">
                        <div className="todo__flex-wrapper">
                            <CheckBox label="Mark as finished" idCheckBox="toDoCheck"/>
                            <Button title="DELETE"/>
                        </div>
                   </ListItem>
               </List>
           </section>);
}

export default ToDoPage