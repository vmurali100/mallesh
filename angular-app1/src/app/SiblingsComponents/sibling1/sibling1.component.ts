import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/common.service";

@Component({
  selector: "app-sibling1",
  templateUrl: "./sibling1.component.html",
  styleUrls: ["./sibling1.component.css"]
})
export class Sibling1Component implements OnInit {
  messageFromSib1 = "Welcome From Sib1";
  objectFromSib1 = {
    fname: "Murali",
    lname: "Krishna"
  };
  arrayFromSib1 = ["Murali", "Krishna", "Ram", "Ravi"];

  // Adding the CommonService in Sibling1 component
  constructor(private cs: CommonService) {}

  ngOnInit() {}

  sendMessageToSib2() {
    this.cs.sendDataFromSib1(this.messageFromSib1);
  }

  sendObjectToSib2() {
    this.cs.sendObjFromSib1(this.objectFromSib1);
  }

  sendArrayToSib3() {
    this.cs.sendArrayFromSib1(this.arrayFromSib1);
  }
}
