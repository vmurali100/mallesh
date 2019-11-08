import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular1",
  templateUrl: "./angular1.component.html",
  styleUrls: ["./angular1.component.css"]
})
export class Angular1Component implements OnInit {
  message1 = "Message will print in the webbrowser.";
  constructor() {}

  ngOnInit() {}
}
