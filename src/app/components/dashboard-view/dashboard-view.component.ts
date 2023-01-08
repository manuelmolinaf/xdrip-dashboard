import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, mergeMap } from 'rxjs';
import { Status } from 'src/models/api/Status';
import { GlucoseValue as GlucoseValue } from 'src/models/api/GlucoseValue';
import { XdripService } from 'src/services/xdrip.service';
import { CompactType, GridsterConfig, GridsterItem, GridType}  from 'angular-gridster2';
import { Tiles } from '../../../models/dashboard/Tiles';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent implements OnInit {

  public glucoseValues:GlucoseValue[] = new Array<GlucoseValue>();
  public sgvNumberArray:number[] = new Array<number>();
  public glucoseValuesCount:number = 288*7;
  public status!: Status;

  public tilesType = Tiles;

  public dashboardTiles:Tiles[] = []
  
  dashboard: Array<GridsterItem> = new Array<GridsterItem>();

  //gridster dashboard configuration
  options: GridsterConfig = {
    itemChangeCallback: this.itemChange,
    itemResizeCallback: this.itemResize,
    gridType: GridType.Fit,
    compactType: CompactType.None,
    maxCols: 10,
    maxRows: 8,
    minCols:10,
    minRows:8,
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


  ngOnInit(): void {
    
    this.setXdripStatus();
    this.setGlucoseValues();
    this.refreshGlucoseValues();
    this.initializeDashboard();

  }

  initializeDashboard(){
    this.dashboard = [ 
      // { item:'glucoseList', resizableHandles:{s: true, e: false,n: true,w: false,se: false, ne: false,sw: false, nw: false }, cols: 2, rows: 8, x: 0, y: 0},
      // { item:'lineChart', cols: 7, rows: 4, x: 2, y: 0},
      // { item:'value', resizeEnabled: false, cols: 2, rows: 1, x: 2, y: 4},
      // { item:'value', resizeEnabled: false, cols: 2, rows: 1, x: 4, y: 4}
       
      
    ];

    this.dashboardTiles = [Tiles.GlucoseList, Tiles.GlucoseLineChart, Tiles.AverageValue, Tiles.LongestHigh];
  }

  itemResize(item: any, itemComponent: any) {
    //console.info('itemResized', item, itemComponent);
    
    
  }

  itemChange(item: any, itemComponent: any) {
    //console.info('itemChanged', item, itemComponent);

  }


  setGlucoseValues(){
    var request = this.xdripService.getGlucoseValues(this.glucoseValuesCount);
    
    request.subscribe( data =>{
      this.glucoseValues = data;  
      this.setSgvNumberArray(); 
    })
    
  }

  refreshGlucoseValues(){
    interval(5*60*1000).pipe(
      mergeMap(()=> this.xdripService.getGlucoseValues(this.glucoseValuesCount))
    ).subscribe(data => {
      this.glucoseValues = data;
    });
  }

  setXdripStatus(){   
    var request = this.xdripService.getStatus();
    request.subscribe( data => this.status = data);
  }

  setSgvNumberArray(){
    this.sgvNumberArray = [];
    this.glucoseValues.forEach(value => this.sgvNumberArray.push(value.sgv));
  }



}

 
