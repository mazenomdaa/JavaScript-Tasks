let input = document.querySelector("[name=dollar]");
let result = document.querySelector(".result");
let rate = 15.6;

function conversion() {
  let usd = parseFloat(input.value) || 0;
  let egp = (usd * rate).toFixed(2);
  result.textContent = `${usd.toFixed(2)} USD Dollar = ${egp} Egyptian Pound`;
}

input.addEventListener("input", conversion);
