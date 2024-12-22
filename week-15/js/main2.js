window.onload = function () {
  if (localStorage.getItem("name")) {
    document.getElementById("name").value = localStorage.getItem("name");
  }
  if (localStorage.getItem("email")) {
    document.getElementById("email").value = localStorage.getItem("email");
  }
  if (localStorage.getItem("age")) {
    document.getElementById("age").value = localStorage.getItem("age");
  }
  if (localStorage.getItem("favoriteColor")) {
    document.getElementById("favoriteColor").value =
      localStorage.getItem("favoriteColor");
  }
};

document.getElementById("myForm").addEventListener("input", function () {
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("age", document.getElementById("age").value);
  localStorage.setItem(
    "favoriteColor",
    document.getElementById("favoriteColor").value
  );
});

window.onbeforeunload = function () {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("age");
  localStorage.removeItem("favoriteColor");
};
