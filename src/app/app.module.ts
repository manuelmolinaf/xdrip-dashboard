import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MainViewComponent } from './components/main-view/main-view.component';
import { NgChartsModule } from 'ng2-charts';
import { GlucoseLineChartComponent } from './components/glucose-line-chart/glucose-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    GlucoseLineChartComponent
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
