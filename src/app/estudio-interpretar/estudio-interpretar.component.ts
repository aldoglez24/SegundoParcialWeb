import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-estudio-interpretar',
  templateUrl: './estudio-interpretar.component.html',
  styleUrls: ['./estudio-interpretar.component.scss']
})
export class EstudioInterpretarComponent implements OnInit {


  estudios: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.getJSON().subscribe(response => {

      //Esta es la lista de doctores, salen del JSON listDoctors.json
      this.estudios = response;
      console.log(this.estudios)

    });
  }


  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/estudiosPorInterpretar.json");
  }

}
