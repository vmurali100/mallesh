function editUser(i) {
  index = i;
  for (a in data[i]) {
    document.getElementById(a).value = data[i][a];
  }
}
function updateUser() {
  var newObj = data[index];
  for (a in newObj) {
    newObj[a] = document.getElementById(a).value;
  }
  data[index] = newObj;
  displayData(data);
  clearForm(newObj);
}

function clearForm(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}
