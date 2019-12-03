import { Component, OnInit, Input } from '@angular/core';
import { InsightDoctor } from '../insight-doctor';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insights-doctor',
  templateUrl: './insights-doctor.component.html',
  styleUrls: ['./insights-doctor.component.scss']
})
export class InsightsDoctorComponent implements OnInit {

 
  insights: any;

  
  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.getJSON().subscribe(response => {

      //Esta es la lista de doctores, salen del JSON listDoctors.json
      this.insights = response;
      console.log(this.insights)

    });

  }


  public getJSON(): Observable<any> {


    
    //return this.http.get("./assets/json/insightsDoctor.json");
    return this.http.get('http://localhost:3000/insights-doctors');



  }
}
