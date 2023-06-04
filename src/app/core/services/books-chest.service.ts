import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '../interfaces/book.interface';

import booksJson from 'src/assets/simulate/db/books.json';

@Injectable({
  providedIn: 'root',
})
export class BooksChestService {
  private $booksChest: BehaviorSubject<IBook[]> = new BehaviorSubject(
    [] as IBook[]
  );

  constructor() {
    const books: any = booksJson['books'];
    this.saveBooks(books);
  }

  getBooks() {
    return this.$booksChest.value;
  }

  saveBooks(books: IBook[]) {
    this.$booksChest.next(books);
  }
}
