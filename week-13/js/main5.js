let elements = document.querySelectorAll("div, span, p, article, section");

elements.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(`This Is <${element.tagName.toLowerCase()}>`);
  });
});
