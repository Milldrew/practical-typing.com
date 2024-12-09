import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardLibComponent } from './keyboard-lib.component';

describe('KeyboardLibComponent', () => {
  let component: KeyboardLibComponent;
  let fixture: ComponentFixture<KeyboardLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
