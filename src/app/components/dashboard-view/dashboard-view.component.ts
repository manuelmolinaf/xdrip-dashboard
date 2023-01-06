import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, mergeMap } from 'rxjs';
import { Status } from 'src/models/Status';
import { GlucoseValue as GlucoseValue } from 'src/models/SugarValue';
import { XdripService } from 'src/services/xdrip.service';
import { CompactType, GridsterConfig, GridsterItem, GridType}  from 'angular-gridster2';
@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent implements OnInit {



  public glucoseValues:GlucoseValue[] = new Array<GlucoseValue>();
  public glucoseValuesCount:number = 288;
  public status!: Status;
  
  dashboard: Array<GridsterItem> = new Array<GridsterItem>();

  //gridster dashboard configuration
  options: GridsterConfig = {
    itemChangeCallback: this.itemChange,
    itemResizeCallback: this.itemResize,
    gridType: GridType.Fit,
    compactType: CompactType.None,
    maxCols: 10,
    //maxRows: 10,
    minCols:10,
    minRows:10,
    pushItems: true,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    }
  };


  constructor(private xdripService:XdripService){
  
  }


  ngOnInit(){
    
    this.setXdripStatus();
    this.setGlucoseValues();
    this.refreshGlucoseValues();
    this.initializeDashboard();

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

  initializeDashboard(){
    this.dashboard = [
      { item:'glucoseList', cols: 3, rows: 10, y: 0, x: 0 },
      { item:'lineChart', cols: 7, rows: 5, y: 0, x: 3}
      
      
    ];
  }

  itemResize(item: any, itemComponent: any) {
    //console.info('itemResized', item, itemComponent);
    
    
  }

  itemChange(item: any, itemComponent: any) {
    //console.info('itemChanged', item, itemComponent);

  }

  test(t:any){
    console.log(t)
  }

}

 
