import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';
import { GlucoseLineChartComponent } from './components/glucose-line-chart/glucose-line-chart.component';
import { GlucoseListComponent } from './components/glucose-list/glucose-list.component';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    GlucoseLineChartComponent,
    GlucoseListComponent,
    DashboardViewComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
