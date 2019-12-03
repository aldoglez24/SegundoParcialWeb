import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { Component, HostBinding, Input, OnInit, Output } from "@angular/core";

import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  loginType = "";

  constructor(private httpClient: HttpClient) { }

  login(email, password){

    var route = "";



    var credentials = this.getTokenLogin(email, password).toPromise()

    return credentials;
    
  }



  ngOnInit() {

  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getTokenLogin(email: string, password: string): Observable<any> {
    //return this.http.get("./assets/json/bestDoctors.json");
    return this.httpClient.post("http://localhost:3000/users/login",



      {
        "email": `${email}`,
        "password": `${password}`,
      }



    )
  }

  public isAuthenticated(): string {
    return localStorage.getItem('isLoggedIn');
  }


}
