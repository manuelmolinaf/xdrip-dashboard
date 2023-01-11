import { Component, Input, ViewChild, OnChanges,OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GlucoseValue } from 'src/models/api/GlucoseValue';
import 'chartjs-adapter-moment'
import { Status } from 'src/models/api/Status';
import { Tiles } from 'src/models/dashboard/Tiles';
@Component({
  selector: 'app-glucose-line-chart-tile',
  templateUrl: './glucose-line-chart-tile.component.html',
  styleUrls: ['./glucose-line-chart-tile.component.css']
})
export class GlucoseLineChartTileComponent implements OnInit, OnChanges, AfterViewInit {
  
  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();
  @Input() status!: Status;
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @ViewChild('myCanvas') canvas!: ElementRef;

  public gridsterItem = { tile:Tiles.GlucoseLineChart,
    cols: 7,
    rows: 4,
    x: 0,
    y: 0
  }
    
  public datasets:any[] = [
    {
      data:[],
      label: 'Blood Glucose',
      //backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: (context:any) => {
        const chart = context.chart;
        const {ctx, chartArea} = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return;
        }
        return this.getGradient(ctx, chartArea);
      },
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      //fill: 'origin'
      
    }
  ];


  public lineChartOptions: ChartConfiguration['options'] = {
    responsive:true,
    maintainAspectRatio:false,
    elements: {
      line: {
        tension: 0.5
      },
      point:{
        radius:0
      }
    },
    scales: {
      x:{
        type: 'time',
        time: {
          unit: 'hour'
        }
      },
      y:{
        beginAtZero: true,
        max: 300
      }  
    },
    plugins: {
      legend:{
        display: false
      },
      // title: {
      //     display: true,
      //     text: 'Glucose Levels'
      // }
    }
  };

  chartWidth:any;
  chartHeight:any;
  chartGradient:any;
  

  public lineChartType: ChartType = 'line';

  

  constructor(){   
  }
  ngOnInit(): void {
    this.setChartData(); 
  }

  ngAfterViewInit(): void {
    
  }
  

  ngOnChanges(){
    this.setChartData(); 
  }
  

  setChartData() {
    this.datasets[0].data = []
    this.glucoseValues.forEach( value => {

      this.datasets[0].data.push({
        x: new Date(value.dateString),
        y: value.sgv
     })

    });

  }

  getGradient(ctx:any, chartArea:any) {
    
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!this.chartGradient || this.chartWidth !== chartWidth || this.chartHeight !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      this.chartWidth = chartWidth;
      this.chartHeight = chartHeight;
      this.chartGradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      
      this.chartGradient.addColorStop(0.23, '#dc3545');
      this.chartGradient.addColorStop(0.28, '#198754');
      this.chartGradient.addColorStop(0.60, '#ffc107');
      this.chartGradient.addColorStop(0.66, '#fd7e14');
    }

    return this.chartGradient;
  }

  

}
