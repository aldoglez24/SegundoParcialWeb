import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-listadoctores',
  templateUrl: './listadoctores.component.html',
  styleUrls: ['./listadoctores.component.scss']
})
export class ListadoctoresComponent implements OnInit {
  
  public doctors: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getJSON().subscribe(response => {

      //Esta es la lista de doctores, salen del JSON listDoctors.json
      this.doctors = response;

    });


  }


  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/listDoctors.json");
  }

}


