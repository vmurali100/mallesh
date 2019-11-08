import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-newsample",
  templateUrl: "./newsample.component.html",
  styleUrls: ["./newsample.component.css"]
})
export class NewsampleComponent implements OnInit {
  newsamplemessage = "Hello world";
  constructor() {}

  ngOnInit() {}
}
