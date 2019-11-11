import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { ListadoctoresComponent } from "./listadoctores/listadoctores.component";
import { AgendarcitaComponent } from "./agendarcita/agendarcita.component";
import { InterpretarComponent } from "./interpretar/interpretar.component";
import { HomedoctorComponent } from "./homedoctor/homedoctor.component";
import { HomepacienteComponent } from "./homepaciente/homepaciente.component";
import { SinginComponent } from "./singin/singin.component";
import { PagarComponent } from "./pagar/pagar.component";
import { PaymentConfirmationComponent } from "./payment-confirmation/payment-confirmation.component";
import { RegistrodoctorComponent } from "./registrodoctor/registrodoctor.component";
import { Registrodoctor1Component } from "./registrodoctor1/registrodoctor1.component";
import { RegistropacienteComponent } from "./registropaciente/registropaciente.component";
import { IngresarestudioComponent } from "./ingresarestudio/ingresarestudio.component";
import { LogoutComponent } from "./logout/logout.component";
import { ChartsModule } from 'ng2-charts';
import {MyBarChartComponent} from "./my-bar-chart/my-bar-chart.component";
import{MyDoughnutChartComponent} from "./my-doughnut-chart/my-doughnut-chart.component";
import{MyPieChartComponent} from "./my-pie-chart/my-pie-chart.component";
import{MyRadarChartComponent} from "./my-radar-chart/my-radar-chart.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "listadoctores", component: ListadoctoresComponent },
  { path: "agendarcita", component: AgendarcitaComponent },
  { path: "interpretar", component: InterpretarComponent },
  { path: "doctor", component: HomedoctorComponent },
  { path: "paciente", component: HomepacienteComponent },
  { path: "signin", component: SinginComponent },
  { path: "pagar", component: PagarComponent },
  { path: "payment-confirmation", component: PaymentConfirmationComponent },
  { path: "registrodoctor", component: RegistrodoctorComponent },
  { path: "registrodoctor1", component: Registrodoctor1Component },
  { path: "registropaciente", component: RegistropacienteComponent },
  { path: "ingresarestudio", component: IngresarestudioComponent },
  { path: "logout", component: LogoutComponent },
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent},
  {path: '**', component: MyBarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
