import PubSub from "../../lib/PubSub"
import state from "./state"
import actions from "../../modules/task-management/actions/actions"
import mutations from "../../modules/task-management/actions/mutations"

//I use acts as a short form of "actions", muts is a short form of mutations and st a short form of state
function AppStore(
    acts,
    muts,
    st
) {  
    this.actions = acts 
    this.mutations = muts
    this.state = st 
    this.eventManager = new PubSub()
   
    this.dispatch = (function (actionKey, payload) {
        
        if (this.actions[actionKey]) {
            
            this.actions[actionKey](this, payload)
            
            this.eventManager.publish('toDosChanged',this.state)
            return true
        }
        
    }).bind(this);

    this.commit = (function (mutationKey, payload) {
        if (this.mutations[mutationKey]) {
            this.mutations[mutationKey](this, payload)
            return true
        }
    }).bind(this);

}

const appStore = new AppStore(actions,mutations,state)

export default appStore