import { ToDoInterface } from "./interfaces.js";
class ToDo implements ToDoInterface{
  constructor (public id:number ,public task: string, readonly status: boolean, readonly deadline: Object){
    this.id = id,
    this.task = task,
    this.status = status,
    this.deadline = deadline
  }
}
export default ToDo;