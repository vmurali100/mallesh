import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormService } from "../form.service";

@Component({
  selector: "app-module-form",
  templateUrl: "./module-form.component.html",
  styleUrls: ["./module-form.component.css"]
})
export class ModuleFormComponent implements OnInit {
  userForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl()
  }); //Step 1 : Creating An Instance of Form Goups
  allUsers: Object;
  id: any;
  constructor(private formService: FormService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  addUser() {
    console.log(this.userForm.value);
    this.formService.createUser(this.userForm.value).subscribe(res => {
      this.formService.informUpdate();
      this.userForm.reset();
    });
  }

  getAllUsers() {
    this.formService.getAllUsers().subscribe(res => {
      this.allUsers = res;
    });
  }

  receiveFromChild(obj) {
    this.id = obj.id;
    this.userForm.get("fname").setValue(obj.fname);
    this.userForm.get("lname").setValue(obj.lname);
  }

  updateUser() {
    let obj = this.userForm.value;
    obj.id = this.id;
    this.formService.updateUser(obj).subscribe(res => {
      this.formService.informUpdate();
      this.userForm.reset();
    });
  }
}
