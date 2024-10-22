const input = document.querySelector(".todo-input");
const input_edit = document.querySelector(".todo-input-edit");
const apply_btn = document.getElementById("apply-btn");
const edit_btn = document.getElementById("edit-btn");
const todo_items = document.querySelector(".todo-items");
let tasks = [];
let selectedId = null;
apply_btn.addEventListener("click", () => {
  let note_value = input.value;
  tasks.push({ name: note_value, id: Math.random(5, 4) });
  showItems(tasks);
});
function deleteItem(id) {
  let filteredData = tasks.filter((item) => item.id != id);
  // tasks = filteredData;
  showItems(filteredData);
  return filteredData;
}

function edit(id) {
  // find the item
  let item = tasks.find((item) => item.id == id);
  // get the name
  // give the name to the edit input
  input_edit.value = item.name;
  selectedId = item.id;
  // edit the right item using map
}
function SaveEdit() {
  let editedTasks = tasks.map((item) => {
    if (item.id == selectedId) {
      return { ...item, name: input_edit.value };
    } else {
      return item;
    }
  });

  showItems(editedTasks);
}

edit_btn.addEventListener("click", () => {
  SaveEdit();
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
showItems(tasks);
