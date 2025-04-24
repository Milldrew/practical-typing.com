import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingersSvgComponent } from './fingers-svg.component';

describe('FingersSvgComponent', () => {
  let component: FingersSvgComponent;
  let fixture: ComponentFixture<FingersSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingersSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FingersSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
