import { deleteItem, edit, SaveEdit } from "./functions.js";
const input = document.querySelector(".todo-input");
const input_edit = document.querySelector(".todo-input-edit");
const apply_btn = document.getElementById("apply-btn");
const edit_btn = document.getElementById("edit-btn");
const todo_items = document.querySelector(".todo-items");
let savedTaskes = JSON.parse(localStorage.getItem("tasks"));

console.log(savedTaskes, "my saved");
let tasks = savedTaskes ? savedTaskes : [];

let selectedId = null;
apply_btn.addEventListener("click", () => {
  let note_value = input.value;

  tasks.push({ name: note_value, id: Math.random(5, 4) });
  console.log(tasks, "");
  // create the local storage

  localStorage.setItem("tasks", JSON.stringify(tasks));
  showItems(tasks);
});

edit_btn.addEventListener("click", () => {
  SaveEdit(tasks, selectedId);
});

function showItems(data) {
  todo_items.innerHTML = data
    .map((item) => {
      return `<div class="todo-item">
              <div>
                <input type="checkbox"/>
                <p>${item.name}</p> 
              </div>
              <div class="icons">
                <img src="./edit.svg" 
                class="edit-icon" 
                 data-bs-toggle="modal"
                 data-bs-target="#editModal" 
                 onclick="edit(${item.id})"/>
                <img src="./trash.svg" onclick="deleteItem(${item.id})"/>
              </div>
            </div>`;
    })
    .join(" ");
}

export { showItems };
showItems(tasks);
