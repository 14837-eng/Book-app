import { IAuthor } from './author.interface';

export interface IBook {
  id: number;
  title: string;
  authors: IAuthor[];
  translators: any[];
  number_of_pages: number;
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: string[];
  download_count: number;
}

export interface IBookFilter {
  search: string;
  author_id: number;
  language: string;
  shelve: string;
  min_pages_count: number;
  max_pages_count: number;
}
