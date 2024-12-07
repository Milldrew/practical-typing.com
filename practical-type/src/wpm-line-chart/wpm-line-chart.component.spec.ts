import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpmLineChartComponent } from './wpm-line-chart.component';

describe('WpmLineChartComponent', () => {
  let component: WpmLineChartComponent;
  let fixture: ComponentFixture<WpmLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WpmLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpmLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
