import { TestBed } from '@angular/core/testing';

import { BooksChestService } from './books-chest.service';

describe('BooksChestService', () => {
  let service: BooksChestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksChestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
