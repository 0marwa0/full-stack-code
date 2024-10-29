import { showItems } from "./index.js";

function deleteItem(id, tasks) {
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
function SaveEdit(tasks, selectedId) {
  let editedTasks = tasks.map((item) => {
    if (item.id == selectedId) {
      return { ...item, name: input_edit.value };
    } else {
      return item;
    }
  });

  showItems(editedTasks);
}

export { edit, deleteItem, SaveEdit };
