import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-app1";
  person = {
    fname: "Murali",
    lname: "Krishna",
    company: "Abc",
    City: "Banglore",
    area: "Whitefield",
    Job: "Fullstack Developer"
  };
  personValues = Object.values(this.person); //Object.values is Js Built in Method which converts Object in to Array

  ngOnInit() {
    console.log(this.personValues);
  }
}
