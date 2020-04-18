import { TestBed } from '@angular/core/testing';

import { YeService } from './ye.service';

describe('YeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YeService = TestBed.get(YeService);
    expect(service).toBeTruthy();
  });
});
