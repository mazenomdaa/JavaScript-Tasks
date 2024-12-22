function popupMsg() {
  let page = document.createElement("div");
  page.id = "page";

  let popup = document.createElement("div");
  popup.id = "popup";

  popup.innerHTML = `
        <button class="close-btn">x</button>
        <h2>Welcome</h2>
        <p>Welcome To Elzero Web School</p>
      `;

  popup.querySelector(".close-btn").onclick = function () {
    popup.remove();
    page.remove();
  };

  document.body.appendChild(page);
  document.body.appendChild(popup);
}

window.onload = function () {
  setTimeout(popupMsg, 5000);
};
