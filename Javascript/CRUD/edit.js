function editUser(i) {
  console.log("editUser called " + i);
  index = i;
  //   document.getElementById("fname").value = data[i].fname;
  //   document.getElementById("lname").value = data[i].lname;
  //   document.getElementById("tel").value = data[i].tel;
  //   document.getElementById("address").value = data[i].address;
  //   document.getElementById("city").value = data[i].city;
  //   document.getElementById("state").value = data[i].state;
  //   document.getElementById("zip").value = data[i].zip;
  for (a in data[i]) {
    document.getElementById(a).value = data[i][a];
  }
}

function updateUser() {
  var newObj = data[index];

  //To get the Latest Values from Form
  for (a in newObj) {
    newObj[a] = document.getElementById(a).value;
  }
  //TO display The latest Values
  displayData(data);
  clearForm(newObj);
}

function clearForm(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}
