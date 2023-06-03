import { IAuthor } from './author.interface';

export interface IBook {
  id: number;
  title: string;
  authors: IAuthor[];
  translators: any[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: string[];
  download_count: number;
}
