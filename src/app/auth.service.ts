import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  loginType = "";

  constructor() {}

  login(email, password) {
    var route = "";

    if (email == "doctor") {
      this.isLoggedIn = true;
      this.loginType = "doctor";
      route = "doctor";
    } else if (email == "paciente") {
      this.isLoggedIn = true;
      this.loginType = "paciente";
      route = "paciente";
    }

    localStorage.setItem("auth", this.isLoggedIn ? "1" : "0");
    email && localStorage.setItem("type", email);

    return route;
  }
}
