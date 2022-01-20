
export default class Calcul {
    constructor(){
      this.value = 0
      this.history = []
    }
  
    executeCommand(command){
      console.log(command)
      this.value = command.execute(this.value)
      console.log("Значение",this.value)
      this.history.push(command)
      }
  
    undo(){
      const command= this.history.pop()
      this.value = command.undo(this.value)
    }
  
}

