import { TestBed } from '@angular/core/testing';

import { LrnSDKService } from './lrn-sdk.service';

describe('LrnSDKService', () => {
  let service: LrnSDKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LrnSDKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
