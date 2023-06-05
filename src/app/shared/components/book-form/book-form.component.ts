import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthor } from 'src/app/core/interfaces/author.interface';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { Author } from 'src/app/core/models/author.model';
import { AuthorsService } from 'src/app/core/services/authors.service';
import { BooksService } from 'src/app/core/services/books.service';

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

  constructor(
    private fb: FormBuilder,
    private authorsService: AuthorsService,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.authors = this.authorsService.getAuthors();

    this.formGroup = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      author: this.fb.control(new Author(), [Validators.required]),
      // sutitle: this.fb.control('', [Validators.required]),
      // count_of_page: this.fb.control('', [Validators.required]),
      // language: this.fb.control('', [Validators.required]),
      // genre: this.fb.control('', [Validators.required]),
    });
  }

  resetAuthor() {
      this.formGroup.get('author')?.setValue(new Author());
  }

  authorComparisonFunction = function (
    option: IAuthor,
    value: IAuthor
  ): boolean {
    return option.id === value.id;
  };

  getAuthorByID(author_id: number) {
    return this.authorsService.getAuthorByID(author_id);
  }
}
