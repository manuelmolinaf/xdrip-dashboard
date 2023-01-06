import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GlucoseValue } from 'src/models/SugarValue';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnChanges {

  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();
  svgValues:number[] = [];

  glucoseAverage: number = 0;
  maxGlucose: number = 0;
  minGlucose: number = 0; 

  constructor(){}

  ngOnInit(){
    
  }

  ngOnChanges(){
    this.setSgvValues();
    this.setAverage();
    this.setMinMaxValues();
  }

  setSgvValues(){
    this.svgValues = [];
    this.glucoseValues.forEach( value => this.svgValues.push(value.sgv));
  }

  setAverage(){
    var sum = 0;
    var average = 0;
    this.svgValues.forEach( value => sum += value);
    average = sum / this.glucoseValues.length;
    this.glucoseAverage = Math.round(average);
  }

  setMinMaxValues(){
    this.minGlucose = Math.min(...this.svgValues);
    this.maxGlucose = Math.max(...this.svgValues);
  }
}
