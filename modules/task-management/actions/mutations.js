const mutations = {
    addToDoItem(store, payload) {
        store.state = [...store.state,payload]
    },

    deleteToDoItem(store, payload) {
        store.state.splice(payload, 1)
        console.log("Deleting")
        store.state = [...store.state]
    },
    
    markToDoItemAsFinished(store, payload) {
        console.log("Marking")
        store.state[payload].state = !store.state[payload].state
        store.state = [...store.state]
    }
}

export default mutations