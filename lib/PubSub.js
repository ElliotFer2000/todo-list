function PubSub(){
    this.events = {}
    this.subscribe = (event,callback) =>{
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(callback)
    }

    this.publish = (event,data)=>{
      if(!this.events[event]){
          throw "The event doesn't exist, check if you previously registered this event with subsribe function"
      }
      const result = this.events[event].forEach(callback => callback(data));
       
      return result
    }
}

export default PubSub