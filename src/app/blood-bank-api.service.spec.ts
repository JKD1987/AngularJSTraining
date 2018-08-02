import { TestBed, inject } from '@angular/core/testing';

import { BloodBankApiService } from './blood-bank-api.service';

describe('BloodBankApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodBankApiService]
    });
  });

  it('should be created', inject([BloodBankApiService], (service: BloodBankApiService) => {
    expect(service).toBeTruthy();
  }));
});
