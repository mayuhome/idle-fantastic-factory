import { TestBed } from '@angular/core/testing';

import { FactoryManagerService } from './factory-manager.service';

describe('FactoryManagerService', () => {
  let service: FactoryManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactoryManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
