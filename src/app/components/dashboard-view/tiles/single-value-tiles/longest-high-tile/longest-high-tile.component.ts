import { Component, Input, OnChanges } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { GlucoseValue } from 'src/models/api/GlucoseValue';
import { Status } from 'src/models/api/Status';
import { Tiles } from 'src/models/dashboard/Tiles';
import * as humanizeDuration from "humanize-duration";
@Component({
  selector: 'app-longest-high-tile',
  templateUrl: './longest-high-tile.component.html',
  styleUrls: ['./longest-high-tile.component.css']
})
export class LongestHighTileComponent implements OnChanges {
  
  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();
  @Input() status!: Status;
  title:string = 'Longest High';
  longestHigh:string = '';
  valueClass: string = '';

  public gridsterItem:GridsterItem = {
    tile:Tiles.LongestHigh,
    resizeEnabled: false,
    cols: 2,
    rows: 1,
    x: 0,
    y: 0
  }



  ngOnChanges(): void {
    if(this.status)
      this.setLongestHigh();
  }

  

  setLongestHigh(){

    var currentLongestHigh = 0;
    
    var highStart = 0;
    var highEnd = 0;

    for( let i = 0; i < this.glucoseValues.length; i++){

      if((i === 0 && this.glucoseValues[i].sgv >= this.status.settings.thresholds.bgHigh) || 
        (i !== 0 && this.glucoseValues[i-1].sgv < this.status.settings.thresholds.bgHigh && this.glucoseValues[i].sgv >= this.status.settings.thresholds.bgHigh) ){         
          highEnd = new Date(this.glucoseValues[i].dateString).getTime();
        }

        if( highEnd > 0 && i !== 0 && this.glucoseValues[i].sgv < this.status.settings.thresholds.bgHigh && this.glucoseValues[i-1].sgv >= this.status.settings.thresholds.bgHigh){
          
          highStart = new Date(this.glucoseValues[i-1].dateString).getTime();

          if(highEnd - highStart > currentLongestHigh){
            currentLongestHigh = highEnd - highStart;
          }
          
          highStart = 0;
          highEnd = 0;
        }
    }

    this.longestHigh = humanizeDuration(currentLongestHigh, { units: ["h", "m"], round:true});
  }

  padTo2Digits(num:number) {
    return num.toString().padStart(2, '0');
  }
  
  convertMsToHM(milliseconds:number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    //if seconds are greater than 30, round minutes up (optional)
    minutes = seconds >= 30 ? minutes + 1 : minutes;
  
    minutes = minutes % 60;
  
    
  
    return (this.padTo2Digits(hours) + ':' + this.padTo2Digits(minutes));
  }



}
