import { INVALID_ID } from '../consts/common.consts';
import { ILangugage } from '../interfaces/languages.interface';

export class Language implements ILangugage {
  id = INVALID_ID;
  name = '';
  constructor(language?: ILangugage) {
    if (!language) return;
    this.id = language.id;
    this.name = language.name;
  }
}
