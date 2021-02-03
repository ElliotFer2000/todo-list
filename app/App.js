import appStore from "./store/AppStore"
import toDos from "./store/state"

function runApp(){
    appStore.eventManager.subscribe('toDosChanged',(data)=>{
     
    })
}

runApp()