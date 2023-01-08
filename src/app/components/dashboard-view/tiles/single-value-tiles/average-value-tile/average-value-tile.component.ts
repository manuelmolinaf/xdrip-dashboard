import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnChanges } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { GlucoseValue } from 'src/models/api/GlucoseValue';
import { Status } from 'src/models/api/Status';
import { Tiles } from 'src/models/dashboard/Tiles';

@Component({
  selector: 'app-average-value-tile',
  templateUrl: './average-value-tile.component.html',
  styleUrls: ['./average-value-tile.component.css']
})
export class AverageValueTileComponent implements OnChanges {
  
  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();
  @Input() status!: Status;
  title:string = 'Average';
  average:number = 0;
  valueClass: string = '';
  sgvValues: number[] = [];

  public gridsterItem:GridsterItem = {
    tile:Tiles.LongestHigh,
    resizeEnabled: false,
    cols: 2,
    rows: 1,
    x: 0,
    y: 0
  }
  
  ngOnChanges(): void {
    
    this.setSgvNumberArray();
    this.setAverage();
    this.setValueClass();

  }

  setAverage(){
    
    if( this.sgvValues.length > 1 ){
      this.average = Math.round(this.sgvValues.reduce((a, b) => a + b) / this.sgvValues.length);
    }
    else if(this.sgvValues.length === 1){
      this.average = this.sgvValues[0];
    }   
  }

  setValueClass(){
    if(this.status){
      if(this.average > this.status.settings.thresholds.bgLow && this.average < this.status.settings.thresholds.bgHigh){
        this.valueClass = 'text-success';
      }
      else if(this.average >= this.status.settings.thresholds.bgHigh){
        this.valueClass = 'text-warning';
      }
      else if(this.average <= this.status.settings.thresholds.bgLow){
        this.valueClass = 'text-danger';
      }
    }
    
  }

  setSgvNumberArray(){
    this.sgvValues = [];
    this.glucoseValues.forEach(value => this.sgvValues.push(value.sgv));
  }
 

}
