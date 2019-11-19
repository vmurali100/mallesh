import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FormService {
  update = new Subject();
  constructor(private _http: HttpClient) {}

  createUser(obj) {
    return this._http.post("http://localhost:3000/users", obj);
  }

  getAllUsers() {
    return this._http.get("http://localhost:3000/users");
  }

  updateUser(obj) {
    return this._http.put("http://localhost:3000/users/" + obj.id, obj);
  }

  deleteUser(obj) {
    return this._http.delete("http://localhost:3000/users/" + obj.id);
  }

  informUpdate() {
    this.update.next();
  }
}
