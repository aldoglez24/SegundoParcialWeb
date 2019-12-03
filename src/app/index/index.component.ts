import { Component, HostBinding, Input, OnInit, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Router } from "@angular/router";


import {FsqService} from '../fsq.service'

import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from "@angular/animations";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
  animations: []
})
export class IndexComponent implements OnInit {
  public doctors: any;
  public graphValues: any;
  public chartColors: string[] = [];

  initialCount: number = 10;

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [];



  constructor(private fsqService:FsqService, private router: Router,private http: HttpClient) {

    this.getJSONGraph().subscribe(response => {
      this.graphValues = response;
      console.log(this.graphValues);

      this.graphValues.forEach(element => {

        var chartLabel: string = element.study;
        this.pieChartLabels.push(chartLabel);

        var chartData: number = element.value;
        this.pieChartData.push(chartData);

        var chartColor: string = element.color;
        this.chartColors.push(chartColor);

      });

      this.pieChartColors = [
        {
          backgroundColor: this.chartColors,
        },
      ];

    });
  }

  ngOnInit() {




    if(localStorage.getItem("auth")=="1"){
      var type =  localStorage.getItem("type");
      this.router.navigateByUrl(`/${type}`, { replaceUrl: true });

    }




    this.getJSON().subscribe(response => {
      //Estos son los 3 mejores doctores, se despliegan en el index, salen del JSON
      console.log(response)
      this.doctors = response;
    });

    //this.sendMessage();
  }

  public getJSON(): Observable<any> {
    //return this.http.get("./assets/json/bestDoctors.json");
    return this.http.get("http://localhost:3000/top-doctors");

  }

  public getJSONGraph(): Observable<any> {
    //return this.http.get("./assets/json/graphValueStudies.json");
    return this.http.get("http://localhost:3000/top-studies");
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
