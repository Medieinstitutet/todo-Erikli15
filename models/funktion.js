import { objectsToList } from "./class";
import { todoList, createHtml } from "./creathtml";

export function addTask(e) {
  e.preventDefault();

  const textValue = document.getElementById("todo").value;
  const objectInput = new objectsToList(textValue, false);
  todoList.push(objectInput);

  document.getElementById("todo").value = "";
  console.log(textValue);
  createHtml();
}

export function checkeds(i) {
  console.log("Du klickade på:", i);
  todoList[i].check = true;
}

export function delit(e) {
  e.preventDefault();

  todoList.pop();

  createHtml();
}

export function sortItems(e) {
  e.preventDefault();
  todoList.sort(function (object1, object2) {
    if (object1 < object2) {
      return -1;
    }
    if (object1 > object2) {
      return 1;
    }
    return 0;
  });
  createHtml();
}
