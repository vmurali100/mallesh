function displayData(data) {
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < data.length; i++) {
    var tr = document.createElement("tr");
    console.log(data[i]);
    for (a in data[i]) {
      var td = document.createElement("td");
      td.innerHTML = data[i][a];
      tr.appendChild(td);
    }
    var etd = document.createElement("td");
    var ebutton = document.createElement("button");
    ebutton.setAttribute("onclick", "editUser(" + i + ")");

    ebutton.innerHTML = "Edit";
    etd.appendChild(ebutton);
    tr.appendChild(etd);

    var dtd = document.createElement("td");
    var dBtn = document.createElement("button");
    dBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    dBtn.innerHTML = "Delete";
    dtd.appendChild(dBtn);
    tr.appendChild(dtd);
    document.getElementById("myTable").appendChild(tr);
  }
}
