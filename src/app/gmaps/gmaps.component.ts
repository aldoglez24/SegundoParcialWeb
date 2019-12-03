import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnInit {

  constructor() { }

  lat: number = 0;
  lng: number = 0;

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(resp => {

      console.log({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude


    },
      err => {
        console.log(err);
      });


  }



}
