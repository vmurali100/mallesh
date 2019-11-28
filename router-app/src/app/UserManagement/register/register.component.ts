import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  registerUser(userForm) {
    console.log(userForm.value);
    localStorage.setItem("userInfo", JSON.stringify(userForm.value));
  }
}
