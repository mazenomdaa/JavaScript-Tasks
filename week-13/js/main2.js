let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let classesListDiv = document.querySelector(".classes-list div");

function updateClassList() {
  let classNames = Array.from(currentElement.classList);

  classesListDiv.innerHTML = "";

  if (classNames.length === 0) {
    classesListDiv.textContent = "No Classes To Show";
  } else {
    classNames.sort();
    classNames.forEach((className) => {
      let span = document.createElement("span");
      span.textContent = className;
      classesListDiv.appendChild(span);
    });
  }
}

function handleClassChange(event, action) {
  let inputField = event.target;
  let value = inputField.value.trim();

  if (value) {
    let classList = value.toLowerCase().split(/\s+/);

    classList.forEach((className) => {
      if (action === "add") {
        currentElement.classList.add(className);
      } else if (action === "remove") {
        currentElement.classList.remove(className);
      }
    });

    inputField.value = "";
  }

  updateClassList();
}

addInput.addEventListener("blur", (event) => handleClassChange(event, "add"));
removeInput.addEventListener("blur", (event) =>
  handleClassChange(event, "remove")
);

updateClassList();
