import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePieChartTileComponent } from './range-pie-chart-tile.component';

describe('RangePieChartTileComponent', () => {
  let component: RangePieChartTileComponent;
  let fixture: ComponentFixture<RangePieChartTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangePieChartTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangePieChartTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
