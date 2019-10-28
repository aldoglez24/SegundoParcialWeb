import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {

  constructor(private router: Router, private auth: AuthService) { }
  title = 'parcial2';

  isLoggedin;


  ngOnInit() {



    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        console.log(this.auth.isLoggedIn)
        this.isLoggedin = this.auth.isLoggedIn;
      }
    })


  }

}