import { TestBed } from '@angular/core/testing';

import { AuthorsChestService } from './authors-chest.service';

describe('AuthorsChestService', () => {
  let service: AuthorsChestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsChestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
