import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router, NavigationStart } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
    private translate: TranslateService
  ) {
    const lang = localStorage.getItem("lang") || "es";

    translate.setDefaultLang(lang);
  }
  title = "parcial2";
  private routesHidden: string[] = [
    // "doctor",
    "interpretar",
    "pagar",
    "agendarcita",
    "ingresarestudio"
  ];
  hidden: boolean = true;

  isLoggedin;

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        // console.log(this.auth.isLoggedIn);
        let _auth = false;
        if (localStorage.getItem("auth")) {
          _auth = localStorage.getItem("auth") == "1" ? true : false;
        }

        this.isLoggedin = _auth;

        this.isHide(event);
      }
    });
  }

  public isHide(event: any) {
    this.hidden = !this.routesHidden.includes(event.url.substring(1));
  }

  useLanguage(language: string) {
    localStorage.setItem("lang", language);
    this.translate.use(language);
  }
}
