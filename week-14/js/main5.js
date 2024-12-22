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
  }
  if (counterValue === 5) {
    window.open(
      `https://elzero.org`,
      `_blank`,
      `width=500,height=500,top=100,left=500`
    );
  } else {
    return;
  }
}

countdown();
