import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthor } from 'src/app/core/interfaces/author.interface';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { Language } from 'src/app/core/models/language.model';
import { ILangugage } from 'src/app/core/interfaces/languages.interface';
import { Author } from 'src/app/core/models/author.model';
import { AuthorsService } from 'src/app/core/services/authors.service';
import { BooksService } from 'src/app/core/services/books.service';
import { LanguagesService } from 'src/app/core/services/languages.service';
import { GenresService } from 'src/app/core/services/genres.service';
import { INVALID_ID } from 'src/app/core/consts/common.consts';

export interface BookFormPayload {
  title: string;
  subtitle: string;
  author: IAuthor;
  count_of_page: number;
  language: ILangugage;
  genre: string;
}

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookFormComponent implements OnInit {
  @Input() book!: IBook;

  @Output() onSave: EventEmitter<BookFormPayload> = new EventEmitter();

  formGroup!: FormGroup;

  authors: IAuthor[] = [];
  languages: ILangugage[] = [];
  genres: string[] = [];

  constructor(
    private fb: FormBuilder,
    private languagesService: LanguagesService,
    private authorsService: AuthorsService,
    private genresService: GenresService
  ) {}

  getLanguageByStr(lang: string) {
    let language = new Language();
    const findedLang = this.languagesService.getLangByName(lang);
    if (findedLang != undefined) {
      language = new Language(findedLang);
    }
    return language;
  }

  formGroupInitWithoutBookData() {
    this.formGroup = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      subtitle: this.fb.control('', [Validators.required]),
      author: this.fb.control(new Author(), [Validators.required]),
      count_of_page: this.fb.control(1, [Validators.required]),
      language: this.fb.control(new Language(), [Validators.required]),
      genre: this.fb.control('', [Validators.required]),
    });
  }

  formGroupInitByBook() {
    const {
      title,
      subtitle,
      number_of_pages,
      authors,
      languages,
      bookshelves,
    } = this.book;
    let author = new Author(authors[0]);
    let language = this.getLanguageByStr(languages[0]);
    let genre = bookshelves[0];

    this.formGroup = this.fb.group({
      title: this.fb.control(title?.length ? title : '', [Validators.required]),
      subtitle: this.fb.control(subtitle?.length ? subtitle : '', [
        Validators.required,
      ]),
      author: this.fb.control(author, [Validators.required]),
      count_of_page: this.fb.control(number_of_pages ? number_of_pages : 1, [
        Validators.required,
      ]),
      language: this.fb.control(language, [Validators.required]),
      genre: this.fb.control(genre, [Validators.required]),
    });
  }

  formGroupInit() {
    if (!this.book) {
      this.formGroupInitWithoutBookData();
      return;
    }
    this.formGroupInitByBook();
  }

  ngOnInit(): void {
    this.authors = this.authorsService.getAuthors();
    this.languages = this.languagesService.getLangs();
    this.genres = this.genresService.getGenres();

    this.formGroupInit();
  }

  resetAuthor() {
    this.formGroup.get('author')?.setValue(new Author());
  }

  resetLang() {
    this.formGroup.get('language')?.setValue(new Language());
  }

  resetGenre() {
    this.formGroup.get('genre')?.setValue('');
    this.formGroup.get('genre')?.setErrors(null);
  }

  authorComparisonFunction = function (
    option: IAuthor,
    value: IAuthor
  ): boolean {
    return option.id === value.id;
  };

  langComparisonFunction = function (
    option: ILangugage,
    value: ILangugage
  ): boolean {
    return option.id === value.id;
  };

  getAuthorByID(author_id: number) {
    return this.authorsService.getAuthorByID(author_id);
  }

  checkFormErrors() {
    if (this.formGroup.get('author')?.value.id === INVALID_ID) {
      this.formGroup.get('author')?.setErrors({ incorrect: true });
    }
    if (this.formGroup.get('language')?.value.id === INVALID_ID) {
      this.formGroup.get('language')?.setErrors({ incorrect: true });
    }
  }

  onSubmit(event: any) {
    this.checkFormErrors();
    if (this.formGroup.invalid) return;
    this.onSave.next(this.formGroup.value);
  }
}
