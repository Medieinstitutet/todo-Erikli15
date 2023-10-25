import { addTask, delit, sortItems } from "./funktion";
document.getElementById("addToList").addEventListener("click", addTask);
document.getElementById("sort").addEventListener("click", sortItems);

export const todoList = ["handla", "uppsats"];

export function createHtml() {
  const theDiv = document.getElementById("todolistelement");
  theDiv.innerHTML = "";

  const createHtmlElement = document.createElement("section");

  const articleElement = document.createElement("article");

  for (let i = 0; i < todoList.length; i++) {
    const checkElement = document.createElement("input");
    checkElement.type = "checkbox";

    const listElemnt = document.createElement("li");
    listElemnt.innerHTML = todoList[i];

    const takeOffElement = document.createElement("button");
    const buttonSymbol = document.createTextNode("\u00D7");
    takeOffElement.addEventListener("click", delit);
    takeOffElement.appendChild(buttonSymbol);

    articleElement.appendChild(checkElement);
    articleElement.appendChild(listElemnt);
    articleElement.appendChild(takeOffElement);

    createHtmlElement.appendChild(articleElement);
    theDiv.appendChild(createHtmlElement);
  }
  document.body.appendChild(theDiv);
}

console.log(todoList);
createHtml();
