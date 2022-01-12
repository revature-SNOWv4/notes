import { TestBed } from '@angular/core/testing';

import { ServiceabcService } from './serviceabc.service';

describe('ServiceabcService', () => {
  let service: ServiceabcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceabcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
