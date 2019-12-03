import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { LoginKeys } from "../login-keys";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-singin",
  templateUrl: "./singin.component.html",
  styleUrls: ["./singin.component.scss"]
})
export class SinginComponent implements OnInit {
  loginKeys: LoginKeys;

  constructor(private router: Router, private auth: AuthService) {
    this.loginKeys = new LoginKeys(); //Se declara vacio por los simbolos de ? de Alumno.ts
  }

  ngOnInit() { }

  login(form: NgForm) {
    console.log(form.value);

    var credentials = this.auth.login(form.value.email, form.value.password);

    credentials.then(response => {
      console.log(response)
      localStorage.setItem("token", response.token);
      localStorage.setItem("auth", "1");
      localStorage.setItem("type", `${response.user.userType}`)
      this.router.navigateByUrl(`/${response.user.userType}`, { replaceUrl: true });
    }).catch((e: any) =>{
    });

    /*
    if (route != "") {
      this.router.navigateByUrl(`/${route}`, { replaceUrl: true });
    }
    */

  }



}
