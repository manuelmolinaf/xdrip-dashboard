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
  glucoseValues:GlucoseValue[] = new Array<GlucoseValue>();
  glucoseValuesCount:number = 50;
  status!: Status;
  public lineChartData: ChartConfiguration['data'] | undefined;


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
      console.log(data);
    });
  }

  setXdripStatus(){   
    var request = this.xdripService.getStatus();
    request.subscribe( data => this.status = data);
  }

  getChartData(){
    this.glucoseValues.map(value => {

    })
  }




}
