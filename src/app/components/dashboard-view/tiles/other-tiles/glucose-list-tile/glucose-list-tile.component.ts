import { Component, Input } from '@angular/core';
import { Status } from 'src/models/api/Status';
import { GlucoseValue } from 'src/models/api/GlucoseValue';
import { GridsterItem } from 'angular-gridster2';
import { Tiles } from 'src/models/dashboard/Tiles';

@Component({
  selector: 'app-glucose-list-tile',
  templateUrl: './glucose-list-tile.component.html',
  styleUrls: ['./glucose-list-tile.component.css']
})
export class GlucoseListTileComponent {
  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();
  @Input() status!: Status;

  public gridsterItem:GridsterItem ={ 
    tile:Tiles.GlucoseList, 
    resizableHandles:{
      s: true,
      e: false,
      n: true,
      w: false,
      se: false,
      ne: false,
      sw: false, 
      nw: false 
    }, 
    cols: 2,
    rows: 8,
    x: 0,
    y: 0
  };
 
}
