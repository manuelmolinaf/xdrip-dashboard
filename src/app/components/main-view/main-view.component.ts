import { Component, OnInit } from '@angular/core';
import { SugarValue } from 'src/models/SugarValue';
import { XdripService } from 'src/services/xdrip.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  sugarValues:SugarValue[] = new Array<SugarValue>;


  constructor(private xdripService:XdripService){

  }

  ngOnInit(){
    this.getSugarValues(50);
  }

  getSugarValues(count:number){
    var request = this.xdripService.getGlucoseValues(count);

    request.subscribe( values =>{
      this.sugarValues = values;
      console.log(values)
    })
    
  }


}
