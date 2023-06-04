import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILangugage } from '../interfaces/languages.interface';

import languagesJson from 'src/assets/simulate/db/languages.json';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private languages$: BehaviorSubject<ILangugage[]> = new BehaviorSubject(
    [] as ILangugage[]
  );

  constructor() {
    const languages: any = languagesJson['languages'];
    this.saveLangs(languages);
  }

  getLangs() {
    return this.languages$.value;
  }

  saveLangs(langs: ILangugage[]) {
    this.languages$.next(langs);
  }
}
