function createUser() {
  var newObject = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value
  };
  data.push(newObject);
  displayData(data);
  clearForm(newObject);
}
