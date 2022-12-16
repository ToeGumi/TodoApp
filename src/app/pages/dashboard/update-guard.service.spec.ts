import { TestBed } from '@angular/core/testing';

import { UpdateGuardServiceService } from './update-guard.service';

describe('UpdateGuardServiceService', () => {
  let service: UpdateGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
