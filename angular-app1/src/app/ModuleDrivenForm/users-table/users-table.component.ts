import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormService } from "../form.service";

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.css"]
})
export class UsersTableComponent implements OnInit {
  allUsers: Object;
  @Output() sendToParent = new EventEmitter();
  constructor(private formService: FormService) {}

  ngOnInit() {
    this.getAllUsers();
    this.formService.update.subscribe(res => {
      this.getAllUsers();
    });
  }

  deleteUser(user) {
    this.formService.deleteUser(user).subscribe(res => {
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.formService.getAllUsers().subscribe(res => {
      this.allUsers = res;
    });
  }

  editUser(user) {
    this.sendToParent.emit(user);
  }
}
