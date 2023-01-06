import { Component, Input } from '@angular/core';
import { GlucoseValue } from 'src/models/SugarValue';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input() glucoseValues: GlucoseValue[] = new Array<GlucoseValue>();
}
