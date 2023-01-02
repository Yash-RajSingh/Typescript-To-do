import ToDo from "./classes.js";
const FormBody = document.getElementById("adder")!;
const ResponseBody = document.getElementById("response")!;

const Randomiser: Function = () => {
  let x = Math.floor(Math.random() * 10);
  var result: string;
  switch (x) {
    case 0:
      result = "bg-blue";
      return result;
    case 1:
      result = "bg-azure";
      return result;
    case 2:
      result = "bg-indigo";
      return result;
    case 3:
      result = "bg-purple";
      return result;
    case 4:
      result = "bg-orange";
      return result;
    case 5:
      result = "bg-yellow";
      return result;
    case 6:
      result = "bg-lime";
      return result;
    case 7:
      result = "bg-green";
      return result;
    case 8:
      result = "bg-teal";
      return result;
    case 9:
      result = "bg-cyan";
      return result;
  }
};
const ChangeStatus: Function = (id: string) => {
  console.log(id)
  const element = document.getElementById(`${id}`)!;
  console.log("dound",element);
};

const DraftTodo: Function = (
  a: string,
  b: boolean,
  c: string,
  d: number
): string => {
  const TempId:String = `card${d}`
  const status = b ? "Completed" : "Uncomplete";
  return `        
<div class="card d-flex w-25 ${Randomiser()} mx-1 ${TempId}"  onclick="function test(){
  // this.classList.add('opcacity-5');
  document.querySelector('.card${d}').classList.add('opacity-75');
  document.getElementById('card${d}').classList.remove('bg-red');
  document.getElementById('card${d}').classList.add('bg-green');
  document.getElementById('card${d}').innerText = 'Completed'
  console.log('fired');
} test()">
  <div class="card-body d-flex flex-column">
  <div class="d-flex mt-auto">
  <div>
  <h3 class="card-title">
    <span>${a}</span>
  </h3> 
      </div>
      <div class="ms-auto">
      <button class="btn bg-dark text-white" >done</button>
      </div>
    </div>
    <div class="d-flex mt-auto">
      <div>
        <span class="badge ${
          b ? "bg-green" : "bg-red"
        }" id="card${d}">${status}</span>
      </div>
      <div class="ms-auto">${c}</div>
    </div>
  </div>
</div>`;
};

const AddTodo: Function = (data: ToDo, Count: number): void => {
  const FinalTodo = DraftTodo(data.task, data.status, data.deadline, Count);
  ResponseBody.innerHTML += FinalTodo;
};

var Count: number = 0;

FormBody.addEventListener("click", (e: Event) => {
  e.preventDefault();
  const task = document.getElementById("task") as HTMLInputElement;
  const deadline = document?.getElementById("deadline") as HTMLInputElement;
  const TodoItem = new ToDo(task.value, false, deadline.value);
  AddTodo(TodoItem, Count);
  deadline.value = task.value = " ";
  Count++;
});
