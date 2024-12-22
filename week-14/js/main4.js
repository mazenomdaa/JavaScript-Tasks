let counterElement = document.createElement("div");
counterElement.id = "counter";
counterElement.innerText = "10";
document.body.appendChild(counterElement);

let counterValue = parseInt(counterElement.innerText);

function countdown() {
  if (counterValue >= 0) {
    counterElement.innerText = counterValue;
    counterValue--;
    setTimeout(countdown, 1000);
  } else {
    window.location.href = `https://elzero.org`;
  }
}

countdown();
