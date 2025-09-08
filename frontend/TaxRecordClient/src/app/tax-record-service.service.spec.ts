import { TestBed } from '@angular/core/testing';

import { TaxRecordService } from './tax-record-service.service';

describe('TaxRecordServiceService', () => {
  let service: TaxRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
