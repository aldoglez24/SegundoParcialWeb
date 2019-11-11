import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2015', '2016', '2017', '2018', '2019'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [25, 55, 120, 130, 170, 175, 210], label: 'Hombres'},
    {data: [28, 48, 180, 190, 200, 250, 250], label: 'Mujeres'}
  ];
  ngOnInit() {
  }
}