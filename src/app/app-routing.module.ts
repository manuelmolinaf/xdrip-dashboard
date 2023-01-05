import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { GlucoseLineChartComponent } from './components/glucose-line-chart/glucose-line-chart.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard-view', pathMatch: 'full'},
  {path:'dashboard-view', component:DashboardViewComponent},
  {path:'chart', component:GlucoseLineChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
