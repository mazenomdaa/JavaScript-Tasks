let form = document.querySelector("form");
let results = document.querySelector(".results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let numberOfElements = document.querySelector('input[name="elements"]').value;
  let elementText = document.querySelector('input[name="texts"]').value;
  let elementType = document.querySelector('select[name="type"]').value;

  if (!numberOfElements || !elementText) {
    alert("Please enter a valid number of elements and text.");
    return;
  }

  results.innerHTML = "";

  for (let i = 1; i <= numberOfElements; i++) {
    let newElement = document.createElement(elementType.toLowerCase());
    newElement.id = `id-${i}`;
    newElement.classList.add("box");
    newElement.title = "Element";
    newElement.textContent = elementText;
    results.appendChild(newElement);
  }
});
