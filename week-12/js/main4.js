function swap() {
  let divOne = document.querySelector(".one");
  let divTwo = document.querySelector(".two");

  let titleSwap = divOne.getAttribute("title");
  divOne.setAttribute("title", divTwo.getAttribute("title"));
  divTwo.setAttribute("title", titleSwap);

  let textSwap = divOne.textContent;
  divOne.textContent = divTwo.textContent;
  divTwo.textContent = textSwap + " 2";
}

swap();
