import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { INVALID_ID } from '../consts/common.consts';
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
        const findedAuthor = this.authorsService.getAuthorByIDSync(author.id);
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

  setAuthorFilter(author_id: number) {
    this.filters.author_id = author_id;
  }

  setGenreFilter(gentre: string) {
    this.filters.shelve = gentre;
  }

  setMinCountOfPage(count: number) {
    this.filters.min_pages_count = count;
  }

  setMaxCountOfPage(count: number) {
    this.filters.max_pages_count = count;
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

  private filterByAuthor(books: IBook[], author_id: number) {
    return books.filter((book) => {
      const success = book.authors.find((e) => e.id === author_id);
      return !!success;
    });
  }

  private filterByGenre(books: IBook[], genre: string) {
    return books.filter((book) => {
      const success = book.bookshelves.find((e) => e === genre);
      return !!success;
    });
  }

  private filterByCountOfPages(books: IBook[]) {
    return books.filter((book) => {
      const { min_pages_count, max_pages_count } = this.filters;
      const min_condition = book.number_of_pages >= min_pages_count;
      const max_condition = book.number_of_pages <= max_pages_count;
      return min_condition && max_condition;
    });
  }

  private getBooksIncludingFilters(books: IBook[]) {
    const {
      search,
      language,
      author_id,
      shelve,
      min_pages_count,
      max_pages_count,
    } = this.filters;
    if (search.length) {
      books = this.searchByTitleAndSubtitle(books, search);
    }
    if (language.length) {
      books = this.filterByLang(books, language);
    }
    if (shelve.length) {
      books = this.filterByGenre(books, shelve);
    }
    if (author_id !== INVALID_ID) {
      books = this.filterByAuthor(books, author_id);
    }
    if (min_pages_count >= 0 && max_pages_count >= 0) {
      books = this.filterByCountOfPages(books);
    }
    return books;
  }

  getBooks() {
    let books = this.booksChestService.getBooks();

    books = this.getBooksIncludingFilters(books);

    this.books$.next(books);
  }

  getBookByID(id: number) {
    return this.booksChestService.getBookByID(id);
  }

  createBook(book: IBook) {
    this.booksChestService.createBook(book);
  }

  editBookByID(book_id: number, book: IBook) {
    if (book_id === INVALID_ID || book_id === undefined) return;
    this.booksChestService.editBookByID(book_id, book);
  }
}
