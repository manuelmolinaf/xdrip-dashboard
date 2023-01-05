import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlucoseLineChartComponent } from './components/glucose-line-chart/glucose-line-chart.component';
import { MainViewComponent } from './components/main-view/main-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-view', pathMatch: 'full'},
  {path:'main-view', component:MainViewComponent},
  {path:'chart', component:GlucoseLineChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
