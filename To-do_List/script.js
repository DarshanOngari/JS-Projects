function Add(){

const Input = document.getElementById("TextInput");
const Task = Input.value;

const li = document.createElement("li");
li.textContent = Task;

const del = document.createElement("button");
del.textContent = "Delete";
del.className = "delete-btn";
del.onclick = () => li.remove();

document.getElementById("text").appendChild(li);
li.appendChild(del);
taskInput.value = "";

}