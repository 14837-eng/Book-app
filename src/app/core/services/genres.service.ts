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
    this.saveLangs(genres);
  }

  getLangs() {
    return this.genres$.value;
  }

  saveLangs(genres: string[]) {
    this.genres$.next(genres);
  }
}
