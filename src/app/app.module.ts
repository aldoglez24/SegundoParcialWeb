import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { NavbarIndexComponent } from "./navbar-index/navbar-index.component";
import { FooterIndexComponent } from "./footer-index/footer-index.component";
import { ListadoctoresComponent } from "./listadoctores/listadoctores.component";
import { AgendarcitaComponent } from "./agendarcita/agendarcita.component";
import { NavbarPatientComponent } from "./navbar-patient/navbar-patient.component";
import { InterpretarComponent } from "./interpretar/interpretar.component";
import { NavbarDoctorComponent } from "./navbar-doctor/navbar-doctor.component";
import { HomedoctorComponent } from "./homedoctor/homedoctor.component";
import { HomepacienteComponent } from "./homepaciente/homepaciente.component";
import { SinginComponent } from "./singin/singin.component";
import { PagarComponent } from "./pagar/pagar.component";
import { PaymentConfirmationComponent } from "./payment-confirmation/payment-confirmation.component";
import { RegistrodoctorComponent } from "./registrodoctor/registrodoctor.component";
import { Registrodoctor1Component } from "./registrodoctor1/registrodoctor1.component";
import { RegistropacienteComponent } from "./registropaciente/registropaciente.component";
import { IngresarestudioComponent } from "./ingresarestudio/ingresarestudio.component";
import { HttpClientModule } from "@angular/common/http";
import { InsightsDoctorComponent } from "./insights-doctor/insights-doctor.component";
import { EstudioInterpretarComponent } from "./estudio-interpretar/estudio-interpretar.component";
import { LogoutComponent } from './logout/logout.component';
import { InsightsPatientComponent } from './insights-patient/insights-patient.component';

//Interceptors

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';


import { ChartsModule } from 'ng2-charts';

import {FsqService} from './fsq.service'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarIndexComponent,
    FooterIndexComponent,
    ListadoctoresComponent,
    AgendarcitaComponent,
    NavbarPatientComponent,
    InterpretarComponent,
    NavbarDoctorComponent,
    HomedoctorComponent,
    HomepacienteComponent,
    SinginComponent,
    PagarComponent,
    PaymentConfirmationComponent,
    RegistrodoctorComponent,
    Registrodoctor1Component,
    RegistropacienteComponent,
    IngresarestudioComponent,
    InsightsDoctorComponent,
    EstudioInterpretarComponent,
    LogoutComponent,
    InsightsPatientComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  FsqService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
