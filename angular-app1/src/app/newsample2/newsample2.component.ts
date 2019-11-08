import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-newsample2",
  templateUrl: "./newsample2.component.html",
  styleUrls: ["./newsample2.component.css"]
})
export class Newsample2Component implements OnInit {
  newsample2msg = "Hello Angular JS.";
  constructor() {}

  ngOnInit() {}
}
