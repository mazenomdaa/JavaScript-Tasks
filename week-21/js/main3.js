// mainData Variable Content

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "json/maindata.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    console.log(mainData);

    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All";
    }
    console.log(mainData);

    let UpdatedData = JSON.stringify(mainData);
    console.log(UpdatedData);
  }
};

// UpdatedData Variable Content "JSON Object Content Here"
