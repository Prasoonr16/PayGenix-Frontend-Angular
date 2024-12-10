import { TestBed } from '@angular/core/testing';

import { ComplianceserviceService } from './complianceservice.service';

describe('ComplianceserviceService', () => {
  let service: ComplianceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplianceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
