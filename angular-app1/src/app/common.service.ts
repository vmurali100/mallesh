import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  //Create A Subject to recieve and send Data
  communicate = new Subject();
  communicateObj = new Subject();
  communicateArray = new Subject();
  constructor() {}

  sendDataFromSib1(msg) {
    this.communicate.next(msg);
  }
  sendObjFromSib1(obj) {
    this.communicateObj.next(obj);
  }
  sendArrayFromSib1(array) {
    this.communicateArray.next(array);
  }
}
