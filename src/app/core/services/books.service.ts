import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import booksJson from 'src/assets/simulate/db/books.json';
import { IAuthor } from '../interfaces/author.interface';
import { IBook } from '../interfaces/book.interface';
import { BookFilter } from '../models/books.model';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books$: BehaviorSubject<IBook[]> = new BehaviorSubject([] as IBook[]);
  private filters = new BookFilter();

  constructor(private authorsService: AuthorsService) {}

  private setDataOfAuthorsOfBooks = (books: IBook[]) => {
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

  setSearch(value: string) {
    this.filters.search = value;
  }
  private searchByTitle(books: IBook[], value: string) {
    return books.filter((book) => {
      const searchValue = value.toLowerCase();
      const title = book.title.toLowerCase();
      return title.includes(searchValue);
    });
  }

  getBooks() {
    const { search } = this.filters;
    let books: any = booksJson['books'];

    if (search) {
      books = this.searchByTitle(books, search);
    }

    this.books$.next(books);
  }
}
