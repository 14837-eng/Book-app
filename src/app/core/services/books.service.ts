import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import booksJson from 'src/assets/simulate/db/books.json';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {
    const books = booksJson['books'];
    this.books$.next(books);
  }
}
