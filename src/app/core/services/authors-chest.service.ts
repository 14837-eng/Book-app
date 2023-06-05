import { Injectable } from '@angular/core';
import { IAuthor } from '../interfaces/author.interface';

import authorsJson from 'src/assets/simulate/db/authors.json';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorsChestService {
  private $authorsChest: BehaviorSubject<IAuthor[]> = new BehaviorSubject(
    [] as IAuthor[]
  );

  constructor() {
    const authors: any = authorsJson['authors'];
    this.saveAuthors(authors);
  }

  getauthors() {
    return this.$authorsChest.value;
  }

  getauthorByID(id: number): Observable<IAuthor> {
    return this.$authorsChest.pipe(
      map((authors) => {
        const author = authors.find((b) => b.id === id) as IAuthor;
        return author;
      })
    );
  }

  saveAuthors(authors: IAuthor[]) {
    this.$authorsChest.next(authors);
  }

  createAuthor(author: IAuthor) {
    const authors = this.getauthors();
    author.id = authors.length;
    this.saveAuthors([...authors, author]);
  }

  editAuthorByID(author_id: number, author: IAuthor) {
    let authors = this.getauthors();
    authors = authors.map((b) => {
      if (b.id !== author_id) return b;
      return author;
    });
    this.saveAuthors(authors);
  }
}
