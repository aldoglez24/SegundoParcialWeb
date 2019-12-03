import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FsqService {

  constructor(protected http: HttpClient) { }



  getPlaces() {
     // Initialize Params Object
     let params = new HttpParams();

     // Begin assigning parameters
     params = params.append('client_id', 'ZAMJBF1T0PFG5R5JDKCQXAPENK1ZCFNJLHKCJO3U4QZ2VYLP');
     params = params.append('client_secret', 'PLMQCZMLDHAZA4SLOHHWBWM3KPTL1MTBX05QOB0CB2NU5PCZ');
     params = params.append('ll', `19.438582,-99.178826`);
     params = params.append('query', 'Gym / Fitness');
     params = params.append('v', '201901001');
     params = params.append('limit', '50');
     params = params.append('radius', '100');
     
     
    return this.http.get('https://api.foursquare.com/v2/venues/explore',{ params: params });
  }


}
