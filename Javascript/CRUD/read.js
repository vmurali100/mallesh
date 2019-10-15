var index;
function displayData(data) {
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < data.length; i++) {
    var myTr = document.createElement("tr");

    // Display Object Inforamtion without for in loop

    // var td1 = document.createElement("td");
    // td1.innerHTML = data[i].fname;
    // myTr.appendChild(td1);

    // var td2 = document.createElement("td");
    // td2.innerHTML = data[i].lname;
    // myTr.appendChild(td2);

    // var td3 = document.createElement("td");
    // td3.innerHTML = data[i].tel;
    // myTr.appendChild(td3);

    // var td4 = document.createElement("td");
    // td4.innerHTML = data[i].address;
    // myTr.appendChild(td4);

    // var td5 = document.createElement("td");
    // td5.innerHTML = data[i].city;
    // myTr.appendChild(td5);

    // var td6 = document.createElement("td");
    // td6.innerHTML = data[i].state;
    // myTr.appendChild(td6);

    // var td7 = document.createElement("td");
    // td7.innerHTML = data[i].zip;
    // myTr.appendChild(td7);

    // Display Object Information with for in loop

    for (a in data[i]) {
      var td = document.createElement("td");
      td.innerHTML = data[i][a];
      myTr.appendChild(td);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  }
}

function deleteUser(i) {
  data.splice(i, 1);
  displayData(data);
}

// To display Data in Table
displayData(data);
