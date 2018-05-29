import { TestBed, inject } from '@angular/core/testing';

import { AddcityService } from './addcity.service';

describe('AddcityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddcityService]
    });
  });

  it('should be created', inject([AddcityService], (service: AddcityService) => {
    expect(service).toBeTruthy();
  }));
});
