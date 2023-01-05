import { Component, Input, ViewChild, OnChanges,OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GlucoseValue } from 'src/models/SugarValue';
import 'chartjs-adapter-moment'
@Component({
  selector: 'app-glucose-line-chart',
  templateUrl: './glucose-line-chart.component.html',
  styleUrls: ['./glucose-line-chart.component.css']
})
export class GlucoseLineChartComponent {
  
  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();

  public data:any[] = [];


  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      x:{
        type: 'time',
        time: {
          unit: 'hour'
        }
      },   
    },
  };
  

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(){   
  }
  ngOnInit(){
    this.setChartData();
  }

  ngOnChanges(){
    this.setChartData();
  }

  setChartData() {
    this.glucoseValues.forEach( value => {

      this.data.push({
        x: new Date(value.dateString),
        y: value.sgv
     })

    });

  }

}
