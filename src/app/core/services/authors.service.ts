import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import authorsJson from 'src/assets/simulate/db/authors.json';
import { INVALID_ID } from '../consts/common.consts';
import { IAuthor } from '../interfaces/author.interface';
import { AuthorsChestService } from './authors-chest.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authors$: BehaviorSubject<IAuthor[]> = new BehaviorSubject(
    [] as IAuthor[]
  );

  constructor(private authorsChestService: AuthorsChestService) {
    this.authors$.next(authorsChestService.getAuthors());
  }

  getAuthors(): IAuthor[] {
    return this.authors$.getValue();
  }

  getAuthorByID(id: number) {
    return this.authorsChestService.getAuthorByID(id);
  }

  getAuthorByIDSync(id: number) {
    return this.authorsChestService.getAuthorByIDSync(id);
  }

  createAuthor(Author: IAuthor) {
    this.authorsChestService.createAuthor(Author);
  }

  editAuthorByID(Author_id: number, Author: IAuthor) {
    if (Author_id === INVALID_ID || Author_id === undefined) return;
    this.authorsChestService.editAuthorByID(Author_id, Author);
  }
}
