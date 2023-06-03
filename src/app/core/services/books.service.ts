import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import booksJson from 'src/assets/simulate/db/books.json';
import { IAuthor } from '../interfaces/author.interface';
import { IBook } from '../interfaces/book.interface';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books$: BehaviorSubject<IBook[]> = new BehaviorSubject([] as IBook[]);

  constructor(private authorsService: AuthorsService) {
    const books: any = booksJson['books'];
    this.books$.next(books);
  }

  setDataOfAuthorsOfBooks = (books: IBook[]) => {
    return books.map((book) => {
      if (!book.authors.length) return book;
      book.authors = book.authors.map((author: IAuthor) => {
        const findedAuthor = this.authorsService.getAuthorByID(author.id);
        return findedAuthor !== undefined ? findedAuthor : author;
      });
      return book;
    });
  };

  listenBooks() {
    return this.books$.asObservable().pipe(map(this.setDataOfAuthorsOfBooks));
  }
}
