import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import genresJson from 'src/assets/simulate/db/genres.json';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private genres$: BehaviorSubject<string[]> = new BehaviorSubject(
    [] as string[]
  );

  constructor() {
    const genres: any = genresJson['genres'];
    this.saveGenres(genres);
  }

  getGenres() {
    return this.genres$.value;
  }

  saveGenres(genres: string[]) {
    this.genres$.next(genres);
  }
}
