import { Component, OnInit } from '@angular/core';
import { interval, mergeMap } from 'rxjs';
import { Status } from 'src/models/Status';
import { GlucoseValue as GlucoseValue } from 'src/models/SugarValue';
import { XdripService } from 'src/services/xdrip.service';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  public glucoseValues:GlucoseValue[] = new Array<GlucoseValue>();
  public glucoseValuesCount:number = 50;
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
      this.setChartData();
    })
    
  }

  refreshGlucoseValues(){
    interval(5*60*100).pipe(
      mergeMap(()=> this.xdripService.getGlucoseValues(this.glucoseValuesCount))
    ).subscribe(data => {
      this.glucoseValues = data;
      this.setChartData();
    });
  }

  setXdripStatus(){   
    var request = this.xdripService.getStatus();
    request.subscribe( data => this.status = data);
  }

  setChartData(){
    var data = {
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ],
          label: 'Series A',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
      ],
      labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
    };

    //do stuff

    this.lineChartData = data;
  }




}
