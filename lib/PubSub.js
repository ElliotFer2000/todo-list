function PubSub() {
    this.events = {}
    this.subscribe = function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = []

        }
        this.events[event].push(callback)
    }

    this.publish = function (event, data) {
        if (this.events[event]) {
            const result = this.events[event].forEach(callback => {
                callback(data)
            });
            return result
        }
    }
}

export default PubSub