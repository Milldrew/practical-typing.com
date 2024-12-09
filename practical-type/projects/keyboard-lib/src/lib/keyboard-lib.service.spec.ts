import { TestBed } from '@angular/core/testing';

import { KeyboardLibService } from './keyboard-lib.service';

describe('KeyboardLibService', () => {
  let service: KeyboardLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
