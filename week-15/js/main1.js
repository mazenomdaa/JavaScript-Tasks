function updatePage() {
  let font = document.getElementById("fontSelect").value;
  let color = document.getElementById("colorSelect").value;
  let size = document.getElementById("sizeSelect").value;

  document.body.style.fontFamily =
    font === "Open"
      ? "'Open Sans', sans-serif"
      : font === "Cairo"
      ? "'Cairo', sans-serif"
      : "'Roboto', sans-serif";
  document.body.style.color = color;
  document.body.style.fontSize = size + "px";

  localStorage.setItem("font", font);
  localStorage.setItem("color", color);
  localStorage.setItem("size", size);
}

window.onload = function () {
  let savedFont = localStorage.getItem("font") || "Open";
  let savedColor = localStorage.getItem("color") || "black";
  let savedSize = localStorage.getItem("size") || "16";

  document.getElementById("fontSelect").value = savedFont;
  document.getElementById("colorSelect").value = savedColor;
  document.getElementById("sizeSelect").value = savedSize;

  updatePage();
};

document.getElementById("fontSelect").addEventListener("change", updatePage);
document.getElementById("colorSelect").addEventListener("change", updatePage);
document.getElementById("sizeSelect").addEventListener("change", updatePage);
