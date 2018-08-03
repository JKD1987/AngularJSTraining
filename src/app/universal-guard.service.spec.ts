import { TestBed, inject } from '@angular/core/testing';

import { UniversalGuardService } from './universal-guard.service';

describe('UniversalGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversalGuardService]
    });
  });

  it('should be created', inject([UniversalGuardService], (service: UniversalGuardService) => {
    expect(service).toBeTruthy();
  }));
});
