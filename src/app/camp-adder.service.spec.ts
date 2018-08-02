import { TestBed, inject } from '@angular/core/testing';

import { CampAdderService } from './camp-adder.service';

describe('CampAdderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampAdderService]
    });
  });

  it('should be created', inject([CampAdderService], (service: CampAdderService) => {
    expect(service).toBeTruthy();
  }));
});
