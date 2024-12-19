let removeP = document.querySelector("p");
let div = document.querySelector("div");
let divBefore = document.createElement("div");
let divAfter = document.createElement("div");

divBefore.className = "start";
divBefore.title = "Start Element";
divBefore.setAttribute("data-value", "Start");
divBefore.appendChild(document.createTextNode("Star"));

divAfter.className = "end";
divAfter.title = "End Element";
divAfter.setAttribute("data-value", "End");
divAfter.appendChild(document.createTextNode("End"));

removeP.remove();
div.before(divBefore);
div.after(divAfter);
