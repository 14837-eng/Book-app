import { INVALID_ID } from '../consts/common.consts';
import { IAuthor } from '../interfaces/author.interface';
import { IBook } from '../interfaces/book.interface';

export class Book implements IBook {
  id = INVALID_ID;
  title = '';
  subtitle = '';
  authors: IAuthor[] = [];
  translators = [];
  languages: string[] = [];
  bookshelves: string[] = [];
  number_of_pages = 0;
  subjects = [];
  copyright = true;
  media_type = '';
  formats = [];
  download_count = 0;
  constructor(book?: IBook) {
    if (!book) return;
    if (book.id) {
      this.id = book.id;
    }
    this.title = book.title;
    this.subtitle = book.subtitle;
    this.authors = book.authors;
    this.languages = book.languages;
    this.bookshelves = book.bookshelves;
    this.number_of_pages = book.number_of_pages;
  }
}
