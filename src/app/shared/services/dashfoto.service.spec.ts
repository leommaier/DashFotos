import { TestBed } from '@angular/core/testing';

import { DashfotoService } from './dashfoto.service';

describe('DashfotoService', () => {
  let service: DashfotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashfotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
