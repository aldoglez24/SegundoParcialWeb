import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-estudio-interpretar',
  templateUrl: './estudio-interpretar.component.html',
  styleUrls: ['./estudio-interpretar.component.scss']
})
export class EstudioInterpretarComponent implements OnInit {

  pageLimit: Number = 3;
  currentPage: string;
  estudios: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {


    localStorage.setItem("paginationDoctorStudies", "0");
    this.currentPage = "1";

    this.getStudies().subscribe(response => {

      //Esta es la lista de doctores, salen del JSON listDoctors.json
      this.estudios = response;

      this.estudios.forEach(estudio => {
        estudio.name = `${estudio.patientObject.nombre} ${estudio.patientObject.paterno} ${estudio.patientObject.materno}`
        estudio.study = estudio.studyCategory;
      });
      console.log(this.estudios)


    });

  }


  public nextPage() {
    console.log("nextpage")

    if (Number(this.currentPage) == this.pageLimit) {

    } else {

      this.currentPage = "" + (Number(this.currentPage) + 1);


      localStorage.setItem("paginationDoctorStudies", "" + (Number(localStorage.getItem("paginationDoctorStudies")) + 1));

      this.getStudies().subscribe(response => {

        //Esta es la lista de doctores, salen del JSON listDoctors.json
        this.estudios = response;

        this.estudios.forEach(estudio => {
          estudio.name = `${estudio.patientObject.nombre} ${estudio.patientObject.paterno} ${estudio.patientObject.materno}`
          estudio.study = estudio.studyCategory;
        });
        console.log(this.estudios)

        //localStorage.setItem("paginationDoctorStudies", "0");

      });
    }

  }


  public prevPage() {
    console.log("prevpage")



    if (Number(this.currentPage) == 1) {

    } else {

    this.currentPage = "" + (Number(this.currentPage) - 1);


    localStorage.setItem("paginationDoctorStudies", "" + (Number(localStorage.getItem("paginationDoctorStudies")) - 1));

    this.getStudies().subscribe(response => {

      //Esta es la lista de doctores, salen del JSON listDoctors.json
      this.estudios = response;

      this.estudios.forEach(estudio => {
        estudio.name = `${estudio.patientObject.nombre} ${estudio.patientObject.paterno} ${estudio.patientObject.materno}`
        estudio.study = estudio.studyCategory;
      });
      console.log(this.estudios)

      //localStorage.setItem("paginationDoctorStudies", "0");

    });
  }
  }


  public getStudies(): Observable<any> {
    //return this.http.get("./assets/json/estudiosPorInterpretar.json");
    console.log(localStorage.getItem("paginationDoctorStudies"))

    return this.http.get(`http://localhost:3000/estudios/interpret/${localStorage.getItem("userId")}/${localStorage.getItem("paginationDoctorStudies")}`);


  }

}
