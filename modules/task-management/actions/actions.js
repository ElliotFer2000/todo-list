const actions = {
    "addToDoItem": function(store, data) {
        store.commit('addToDoItem', data)
    },
    "deleteToDoItem":function (store, data) {
        store.commit('deleteToDoItem', data)
    },
    "markToDoItemAsFinished": function(store, data) {
        store.commit('markToDoItemAsFinished', data)
    }
};

export default actions;