import { TestBed } from '@angular/core/testing';

import { FsqService } from './fsq.service';

describe('FsqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FsqService = TestBed.get(FsqService);
    expect(service).toBeTruthy();
  });
});
