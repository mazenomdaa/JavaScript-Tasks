function createSelectBox(startYear, endYear) {
  // Your Code Here
  const select = document.createElement("select");

  for (startYear; startYear <= endYear; startYear++) {
    const option = document.createElement("option");
    option.value = startYear;
    option.textContent = startYear;
    select.appendChild(option);
  }

  document.body.appendChild(select);
}
createSelectBox(2000, 2021);
