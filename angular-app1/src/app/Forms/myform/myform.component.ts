import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-myform",
  templateUrl: "./myform.component.html",
  styleUrls: ["./myform.component.css"]
})
export class MyformComponent implements OnInit {
  allUsers: Object;
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }
  addUser(userForm) {
    this._http
      .post("http://localhost:3000/users", userForm.value)
      .subscribe(res => {
        console.log("User Added");
        this.getData();
      });
  }

  getData() {
    this._http.get("http://localhost:3000/users").subscribe(res => {
      this.allUsers = res;
    });
  }
  editUser(obj) {
    console.log(obj);
  }

  deleteUser(obj) {
    console.log(obj);
    this._http
      .delete("http://localhost:3000/users/" + obj.id)
      .subscribe(res => {
        this.getData();
      });
  }
}
