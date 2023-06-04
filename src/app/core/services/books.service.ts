import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IAuthor } from '../interfaces/author.interface';
import { IBook } from '../interfaces/book.interface';
import { ILangugage } from '../interfaces/languages.interface';
import { BookFilter } from '../models/books.model';
import { AuthorsService } from './authors.service';
import { BooksChestService } from './books-chest.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books$: BehaviorSubject<IBook[]> = new BehaviorSubject([] as IBook[]);
  private filters = new BookFilter();

  constructor(
    private authorsService: AuthorsService,
    private booksChestService: BooksChestService
  ) {}

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

  getSearchValue() {
    return this.filters.search;
  }

  setSearch(value: string) {
    this.filters.search = value;
  }

  setLangFilter(value: string) {
    this.filters.language = value;
  }

  getFilters() {
    return this.filters;
  }

  private searchByTitleAndSubtitle(books: IBook[], value: string) {
    return books.filter((book) => {
      const searchValue = value.toLowerCase();
      const title = book.title.toLowerCase();
      const subtitle = book.subtitle.toLowerCase();
      return title.includes(searchValue) || subtitle.includes(searchValue);
    });
  }

  private filterByLang(books: IBook[], value: string) {
    return books.filter((book) => {
      const success = book.languages.find((e) => e === value);
      return !!success;
    });
  }

  getBooks() {
    const { search, language } = this.filters;
    let books = this.booksChestService.getBooks();

    if (search.length) {
      books = this.searchByTitleAndSubtitle(books, search);
    }
    if (language.length) {
      books = this.filterByLang(books, language);
    }

    this.books$.next(books);
  }

  getBookByID(id: number) {
    return this.booksChestService.getBookByID(id);
  }
}
