import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestValueTileComponent } from './latest-value-tile.component';

describe('LatestValueTileComponent', () => {
  let component: LatestValueTileComponent;
  let fixture: ComponentFixture<LatestValueTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestValueTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestValueTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
