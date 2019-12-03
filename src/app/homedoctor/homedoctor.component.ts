import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";




import * as $ from 'jquery';


@Component({
  selector: "app-homedoctor",
  templateUrl: "./homedoctor.component.html",
  styleUrls: ["./homedoctor.component.scss"]
})
export class HomedoctorComponent implements OnInit {
  insights: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {



    this.getDoctorProfile().subscribe(response => {

      console.log(response);
      localStorage.setItem("userName", response.Name);

    });


    $(document).ready(function () {
      $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("menuDisplayed");
      });
    });


  }





  public getDoctorProfile(): Observable<any> {



    //return this.http.get("./assets/json/insightsDoctor.json");
    return this.http.get(`http://localhost:3000/doctors/${localStorage.getItem("userId")}`);


  }

}
