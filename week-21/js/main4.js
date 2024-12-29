let myRequest = new XMLHttpRequest();
myRequest.open("GET", "json/maindata2.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);

    let div = document.createElement("div");
    div.id = "data";

    let data = document.createElement("div");
    for (let i = 0; i < mainData.length; i++) {
      let title = document.createElement("h2");
      let titleText = document.createTextNode(mainData[i].title);
      title.appendChild(titleText);

      let body = document.createElement("p");
      let bodyText = document.createTextNode(mainData[i].body);
      body.appendChild(bodyText);

      let author = document.createElement("p");
      let authorText = document.createTextNode(`Author: ${mainData[i].author}`);
      author.appendChild(authorText);

      let category = document.createElement("p");
      let categoryText = document.createTextNode(
        `Category: ${mainData[i].category}`
      );
      category.appendChild(categoryText);

      data.appendChild(title);
      data.appendChild(body);
      data.appendChild(author);
      data.appendChild(category);
      div.appendChild(data);
    }
    document.body.appendChild(div);
  }
};
