import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { LoginKeys } from '../login-keys'


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  loginKeys: LoginKeys;

  constructor(private router: Router, private auth: AuthService) { 

    this.loginKeys = new LoginKeys()  //Se declara vacio por los simbolos de ? de Alumno.ts

  }

  ngOnInit() {
  }


  login(form: NgForm) {
    console.log(form.value);

    var route = this.auth.login(form.value.email, form.value.password);

    if(route != ""){
      this.router.navigateByUrl(`/${route}`);

    }


  }

}



