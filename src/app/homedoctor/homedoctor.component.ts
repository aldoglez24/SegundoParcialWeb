import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-homedoctor",
  templateUrl: "./homedoctor.component.html",
  styleUrls: ["./homedoctor.component.scss"]
})
export class HomedoctorComponent implements OnInit {
  insights: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
