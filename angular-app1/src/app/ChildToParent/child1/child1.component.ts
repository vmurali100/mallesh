import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  //Creating a Custom Event Handler to Raise a event
  @Output() customEvent = new EventEmitter();
  @Output() customEventObj = new EventEmitter();
  @Output() customEventArray = new EventEmitter();
  //String
  message = "Hello I from Child";

  // Object
  childObj = {
    fname: "Murali",
    lname: "Krishna"
  };

  //Array
  childArray = ["Mallesh", "Ravi", "Kumar"];
  constructor() {}

  ngOnInit() {}

  sendStringFromChild() {
    //Using the Custom Event Handler, we are sending the data to Upstream or Parent
    this.customEvent.emit(this.message);
  }

  sendObjectFromChild() {
    this.customEventObj.emit(this.childObj);
  }

  sendArrayFromChild() {
    this.customEventArray.emit(this.childArray);
  }
}
