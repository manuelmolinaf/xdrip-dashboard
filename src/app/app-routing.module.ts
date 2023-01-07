import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { GlucoseLineChartTileComponent } from './components/dashboard-view/tiles/chart-tiles/glucose-line-chart-tile/glucose-line-chart-tile.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard-view', pathMatch: 'full'},
  {path:'dashboard-view', component:DashboardViewComponent},
  {path:'chart', component:GlucoseLineChartTileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
