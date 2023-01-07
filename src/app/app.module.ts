import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';
import { GlucoseLineChartTileComponent } from './components/dashboard-view/tiles/chart-tiles/glucose-line-chart-tile/glucose-line-chart-tile.component';
import { GlucoseListTileComponent } from './components/dashboard-view/tiles/other-tiles/glucose-list-tile/glucose-list-tile.component';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { StatisticsComponent } from './components/dashboard-view/statistics/statistics.component';
import {NgForOf} from '@angular/common';
import {GridsterComponent, GridsterItemComponent} from 'angular-gridster2';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { SharedValueTileComponent } from './components/dashboard-view/tiles/single-value-tiles/shared-value-tile/shared-value-tile.component';
import { AverageValueTileComponent } from './components/dashboard-view/tiles/single-value-tiles/average-value-tile/average-value-tile.component';
import { LatestValueTileComponent } from './components/dashboard-view/tiles/single-value-tiles/latest-value-tile/latest-value-tile.component';
import { LongestHighTileComponent } from './components/dashboard-view/tiles/single-value-tiles/longest-high-tile/longest-high-tile.component';
import { RangePieChartTileComponent } from './components/dashboard-view/tiles/chart-tiles/range-pie-chart-tile/range-pie-chart-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    GlucoseLineChartTileComponent,
    GlucoseListTileComponent,
    DashboardViewComponent,
    StatisticsComponent,
    SharedValueTileComponent,
    AverageValueTileComponent,
    LatestValueTileComponent,
    LongestHighTileComponent,
    RangePieChartTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    NgForOf,
    GridsterComponent,
    GridsterItemComponent,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(fontAwesomeLibrary: FaIconLibrary){
    
  }
}
