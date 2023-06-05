import { IAuthor } from './author.interface';

export interface IBook {
  id?: number;
  title: string;
  subtitle: string;
  authors: IAuthor[];
  languages: string[];
  bookshelves: string[];
  number_of_pages: number;

  translators?: any[];
  subjects?: string[];
  copyright?: boolean;
  media_type?: string;
  formats?: string[];
  download_count?: number;
}

export interface IBookFilter {
  search: string;
  author_id: number;
  language: string;
  shelve: string;
  min_pages_count: number;
  max_pages_count: number;
}
