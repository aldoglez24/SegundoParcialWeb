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

    var auth = localStorage.getItem("auth");
    var auth = localStorage.getItem("auth");
    var auth = localStorage.getItem("auth");

    
    $(document).ready(function () {
      $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("menuDisplayed");
      });
    });


  }
}
