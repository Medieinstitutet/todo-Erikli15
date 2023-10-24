import { todoList } from "./creathtml";

export function addTask() {
  const input = document.getElementById("userinput").value;

  todoList.push(input);

  document.getElementById("userinputs").value = "";
}

export function checked() {}

export function delit() {}

export function sortItems(e) {
  e.preventDefault();

  todoList.sort((items1, items2) => {
    return items1 - items2;
  });
}
