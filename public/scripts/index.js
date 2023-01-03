import ToDo from "./classes.js";
import { Randomiser } from "./Functions.js";
const FormBody = document.getElementById("adder");
const ResponseBody = document.getElementById("response");
var Count = Number(localStorage.getItem('count')) || 0;
var TodoArray = JSON.parse(localStorage.getItem("TaskArray"));
var TempTaskArray = TodoArray || [];
const Delete = () => {
    console.log("wow");
};
const DraftTodo = (a, b, c, d) => {
    const status = b ? "Completed" : "Incomplete";
    return `        
<div class="card d-flex w-25 ${Randomiser()} mx-1 card${d}" id='${d}' >
  <div class="card-body d-flex flex-column">
  <div class="d-flex mt-auto">
  <div>
  <h3 class="card-title">
    <span>${a}</span>
  </h3> 
      </div>
      <div class="ms-auto">
      <button class="btn bg-dark text-white" onclick="function test(){
  // this.classList.add('opcacity-5');
  document.querySelector('.card${d}').classList.add('opacity-75');
  document.getElementById('card${d}').classList.remove('bg-red');
  document.getElementById('card${d}').classList.add('bg-green');
  document.getElementById('card${d}').innerText = 'Completed'
  console.log('fired');
} test()" >
<i class="ti ti-check"></i>
</button>
      </div>
    </div>
    <div class="d-flex mt-auto">
      <div>
        <span class="badge ${b ? "bg-green" : "bg-red"}" id="card${d}">${status}</span>
      </div>
      <div class="ms-auto">${c}</div>
    </div>
  </div>
</div>`;
};
const AddTodo = (data) => {
    const FinalTodo = DraftTodo(data.task, data.status, data.deadline, data.id);
    ResponseBody.innerHTML += FinalTodo;
};
const DisplayToDo = () => {
    let TodoArray = JSON.parse(localStorage.getItem("TaskArray"));
    TodoArray.map((element) => {
        AddTodo(element);
    });
};
FormBody.addEventListener("click", (e) => {
    e.preventDefault();
    const task = document.getElementById("task");
    const deadline = document === null || document === void 0 ? void 0 : document.getElementById("deadline");
    const Todo = new ToDo(Count, task.value, false, deadline.value);
    Count = Count + 1;
    var current = TempTaskArray.length;
    TempTaskArray[current] = Todo;
    console.log(TempTaskArray);
    localStorage.setItem("count", Count);
    localStorage.setItem("TaskArray", JSON.stringify(TempTaskArray));
    deadline.value = task.value = " ";
    ResponseBody.innerHTML = '';
    DisplayToDo();
});
DisplayToDo();
