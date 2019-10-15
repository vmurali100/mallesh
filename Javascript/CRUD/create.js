function createUser() {
  var nwObject = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    tel: document.getElementById("tel").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value
  };
  data.push(nwObject);
  displayData(data);
  clearForm(nwObject);
}
