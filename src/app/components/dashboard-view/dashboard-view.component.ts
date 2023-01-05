import { Component, OnInit } from '@angular/core';
import { interval, mergeMap } from 'rxjs';
import { Status } from 'src/models/Status';
import { GlucoseValue as GlucoseValue } from 'src/models/SugarValue';
import { XdripService } from 'src/services/xdrip.service';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent {

  public glucoseValues:GlucoseValue[] = new Array<GlucoseValue>();
  public glucoseValuesCount:number = 288;
  public status!: Status;
  public lineChartData: ChartConfiguration['data'] | undefined;
  public lineChartType: ChartType = 'line';


  constructor(private xdripService:XdripService){
    
  }

  ngOnInit(){
    this.setXdripStatus();
    this.setGlucoseValues();
    this.refreshGlucoseValues();
  }

  setGlucoseValues(){
    var request = this.xdripService.getGlucoseValues(this.glucoseValuesCount);
    
    request.subscribe( data =>{
      this.glucoseValues = data;   
    })
    
  }

  refreshGlucoseValues(){
    interval(5*60*100).pipe(
      mergeMap(()=> this.xdripService.getGlucoseValues(this.glucoseValuesCount))
    ).subscribe(data => {
      this.glucoseValues = data;
    });
  }

  setXdripStatus(){   
    var request = this.xdripService.getStatus();
    request.subscribe( data => this.status = data);
  }

 
}
