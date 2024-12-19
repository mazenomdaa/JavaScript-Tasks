let images = document.querySelectorAll("img");

for (let image of images) {
  if (image.hasAttribute("alt")) {
    if (image.getAttribute("alt") !== "") {
      image.setAttribute("alt", "Old");
    }
  } else {
    image.setAttribute("alt", "Elzero New");
  }
}
