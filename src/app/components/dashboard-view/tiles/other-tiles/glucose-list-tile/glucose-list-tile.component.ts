import { Component, Input } from '@angular/core';
import { Status } from 'src/models/api/Status';
import { GlucoseValue } from 'src/models/api/GlucoseValue';

@Component({
  selector: 'app-glucose-list-tile',
  templateUrl: './glucose-list-tile.component.html',
  styleUrls: ['./glucose-list-tile.component.css']
})
export class GlucoseListTileComponent {
  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();
  @Input() status!: Status;
 
}
