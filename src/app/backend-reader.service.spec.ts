import { TestBed } from '@angular/core/testing';

import { BackendReaderService } from './backend-reader.service';

describe('BackendReaderService', () => {
  let service: BackendReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
