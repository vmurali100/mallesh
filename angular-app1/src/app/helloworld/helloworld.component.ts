import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-helloworld",
  templateUrl: "./helloworld.component.html",
  styleUrls: ["./helloworld.component.css"]
})
export class HelloworldComponent implements OnInit {
  hello = "front end developer. with Angular JS";
  constructor() {}

  ngOnInit() {}
}
