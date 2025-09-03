import { TestBed } from '@angular/core/testing';

import { TaxRecordServiceService } from './tax-record-service.service';

describe('TaxRecordServiceService', () => {
  let service: TaxRecordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxRecordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
