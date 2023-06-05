import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
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

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookFormComponent implements OnInit {
  @Input() book!: IBook;

  formGroup!: FormGroup;

  authors: IAuthor[] = [];
  languages: ILangugage[] = [];
  genres: string[] = [];

  constructor(
    private fb: FormBuilder,
    private languagesService: LanguagesService,
    private authorsService: AuthorsService,
    private genresService: GenresService,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.authors = this.authorsService.getAuthors();
    this.languages = this.languagesService.getLangs();
    this.genres = this.genresService.getGenres();

    this.formGroup = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      subtitle: this.fb.control('', [Validators.required]),
      author: this.fb.control(new Author(), [Validators.required]),
      count_of_page: this.fb.control(1, [Validators.required]),
      language: this.fb.control(new Language(), [Validators.required]),
      genre: this.fb.control('', [Validators.required]),
    });
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
}
