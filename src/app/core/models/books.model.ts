import { INVALID_ID } from '../consts/common.consts';
import { IBookFilter } from '../interfaces/book.interface';

export class BookFilter implements IBookFilter {
  search = '';
  author_id = INVALID_ID;
  language = '';
  shelve = '';
  min_pages_count = 0;
  max_pages_count = 9999;
  constructor(filter?: IBookFilter) {
    if (!filter) return;
    this.search = filter.search;
    this.author_id = filter.author_id;
    this.language = filter.language;
    this.shelve = filter.shelve;
    this.min_pages_count = filter.min_pages_count;
    this.max_pages_count = filter.max_pages_count;
  }
}
