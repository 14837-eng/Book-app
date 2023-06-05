import { INVALID_ID, INVALID_YEAR } from '../consts/common.consts';
import { IAuthor } from '../interfaces/author.interface';

export class Author implements IAuthor {
  name = '';
  birth_year = INVALID_YEAR;
  death_year = INVALID_YEAR;
  id = INVALID_ID;
  constructor(author?: IAuthor) {
    if (!author) return;
    this.name = author.name;
    this.birth_year = author.birth_year;
    this.death_year = author.death_year;
    this.id = author.id;
  }
}
