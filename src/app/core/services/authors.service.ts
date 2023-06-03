import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import authorsJson from 'src/assets/simulate/db/authors.json';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {
    const authors = authorsJson['authors'];
    this.authors$.next(authors);
  }
}
