import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import authorsJson from 'src/assets/simulate/db/authors.json';
import { IAuthor } from '../interfaces/author.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors$: BehaviorSubject<IAuthor[]> = new BehaviorSubject(
    [] as IAuthor[]
  );

  constructor() {
    const authors = authorsJson['authors'];
    this.authors$.next(authors);
  }
}