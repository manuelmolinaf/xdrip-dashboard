import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { GlucoseLineChartTileComponent } from './components/dashboard-view/tiles/chart-tiles/glucose-line-chart-tile/glucose-line-chart-tile.component';
import { MainViewComponent } from './components/main-view/main-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-view', pathMatch: 'full'},
  {path:'main-view', component:MainViewComponent},
  {path:'dashboard-view', component:DashboardViewComponent},
  {path:'chart', component:GlucoseLineChartTileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
