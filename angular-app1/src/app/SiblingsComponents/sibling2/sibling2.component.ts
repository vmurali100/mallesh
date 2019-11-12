import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/common.service";

@Component({
  selector: "app-sibling2",
  templateUrl: "./sibling2.component.html",
  styleUrls: ["./sibling2.component.css"]
})
export class Sibling2Component implements OnInit {
  constructor(private cs: CommonService) {}

  ngOnInit() {
    this.cs.communicate.subscribe(res => {
      console.log(res);
    });

    this.cs.communicateObj.subscribe(obj => {
      console.log(obj);
    });

    this.cs.communicateArray.subscribe(array => {
      console.log(array);
    });
  }
}
