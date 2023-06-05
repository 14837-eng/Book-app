import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
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

  getBookByID(id: number): Observable<IBook> {
    return this.$booksChest.pipe(
      map((books) => {
        const book = books.find((b) => b.id === id) as IBook;
        return book;
      })
    );
  }

  saveBooks(books: IBook[]) {
    this.$booksChest.next(books);
  }

  createBook(book: IBook) {
    const books = this.getBooks();
    book.id = books.length;
    this.saveBooks([...books, book]);
  }

  editBookByID(book_id: number, book: IBook) {
    let books = this.getBooks();
    books = books.map((b) => {
      if (b.id !== book_id) return b;
      return book;
    });
    this.saveBooks(books);
  }
}
