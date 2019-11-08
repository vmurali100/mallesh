import { Component } from "@angular/core";
@Component({
  selector: "sample1",
  templateUrl: "./sample2.component.html"
})
export class sample1Component {
  message =
    "Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated per an element";
}
