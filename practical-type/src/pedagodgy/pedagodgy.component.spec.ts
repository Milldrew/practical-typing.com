import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagodgyComponent } from './pedagodgy.component';

describe('PedagodgyComponent', () => {
  let component: PedagodgyComponent;
  let fixture: ComponentFixture<PedagodgyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedagodgyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedagodgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
