import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth.service";
import { Router } from "@angular/router";

/*  Aquí vamos a poner el tipo de navbar que se va a desplegar
      1: Index, que es el principal
      2: Doctor
      3: Paciente
*/

@Component({
  selector: "app-navbar-index",
  templateUrl: "./navbar-index.component.html",
  styleUrls: ["./navbar-index.component.scss"]
})
export class NavbarIndexComponent implements OnInit {
  //Esta variable va a guardar si ya se iniciaron sesión
  isLoggedin;
  loginType;
  userName;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    //Este evento se suscribe al login
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        let _auth = false;
        if (localStorage.getItem("auth")) {
          _auth = localStorage.getItem("auth") == "1" ? true : false;
        }

        // this.isLoggedin = !this.auth.isLoggedIn;
        this.isLoggedin = !_auth;
        this.loginType = localStorage.getItem("type") || ""; //this.auth.loginType;
        this.userName = localStorage.getItem("userName");
      }
    });
  }
}
