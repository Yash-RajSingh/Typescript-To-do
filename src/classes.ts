import { ToDoInterface } from "./interfaces.js";
class ToDo implements ToDoInterface{
  constructor (public task: string, readonly status: boolean, readonly deadline: Object){
    this.task = task,
    this.status = status,
    this.deadline = deadline
  }
}
export default ToDo 