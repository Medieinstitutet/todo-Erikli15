import { addTask, sortItems, delit } from "./funktion";

export const todoList = ["Handla", "Uppsats"];

document.getElementById("sort").addEventListener("click", sortItems);

document.getElementById("submit").addEventListener("click", addTask);

document.getElementById("takOff").addEventListener("click", delit);

export function cratHtml() {
  const mySection = document.createElement("section");
  const listContainer = document.createElement("article");

  for (let i = 0; i < todoList.length; i++) {
    const listTag = document.createElement("li");

    listTag.innerHTML = todoList[i];

    listContainer.appendChild(listTag);
    mySection.appendChild(listContainer);
    console.log(todoList);
  }
  document.body.appendChild(mySection);
}

cratHtml();
