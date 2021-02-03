const mutations = {
    addToDoItem(store, payload) {
        store.state.push(payload)
    },

    deleteToDoItem(store, payload) {
        store.state.splice(payload, 1)
    },
    
    markToDoItemAsFinished(store, payload) {
        store.state[payload].state = 'finished'
    }
}

export default mutations