import { Component, Input } from '@angular/core';
import { Status } from 'src/models/Status';
import { GlucoseValue } from 'src/models/SugarValue';

@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.css']
})
export class GlucoseListComponent {
  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();
  @Input() status!: Status;
}
