import { TestBed } from '@angular/core/testing';

import { CompliancereportService } from './compliancereport.service';

describe('CompliancereportService', () => {
  let service: CompliancereportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompliancereportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
