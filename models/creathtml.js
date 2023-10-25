import { addTask, delit, sortItems } from "./funktion";
document.getElementById("addToList").addEventListener("click", addTask);
document.getElementById("sort").addEventListener("click", sortItems);

export const todoList = ["handla", "uppsats"];

export function createHtml() {
  const theDiv = document.getElementById("todolistelement");
  theDiv.innerHTML = "";

  const createHtmlElement = document.createElement("section");
  createHtmlElement.className = "section";

  const articleElement = document.createElement("article");
  articleElement.className = "article";

  for (let i = 0; i < todoList.length; i++) {
    const checkElement = document.createElement("input");
    checkElement.type = "checkbox";
    checkElement.className = "checked";

    const listElemnt = document.createElement("li");
    listElemnt.innerHTML = todoList[i];
    listElemnt.className = "todolist";

    const takeOffElement = document.createElement("button");
    const buttonSymbol = document.createTextNode("\u00D7");
    takeOffElement.className ="takeoff";
    takeOffElement.addEventListener("click", delit);
    takeOffElement.appendChild(buttonSymbol);
    

    listElemnt.appendChild(checkElement);
    listElemnt.appendChild(takeOffElement);

    articleElement.appendChild(listElemnt);
  
    createHtmlElement.appendChild(articleElement);
    theDiv.appendChild(createHtmlElement);
  }
  document.body.appendChild(theDiv);
}

console.log(todoList);
createHtml();
