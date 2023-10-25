import { todoList, createHtml } from "./creathtml";

export function addTask(e) {
  e.preventDefault();

  const textValue = document.getElementById("todo").value;

  todoList.push(textValue);

  document.getElementById("todo").value = "";
  console.log(textValue);
  createHtml();
}

export function checked() {}

export function delit(e) {
  e.preventDefault();

  todoList.pop();

  createHtml();
}

export function sortItems(e) {
  e.preventDefault();

  todoList.sort();

  createHtml();
}
