import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject, take, takeUntil } from 'rxjs';
import { IBook } from '../core/interfaces/book.interface';
import { Book } from '../core/models/book.model';
import { BooksService } from '../core/services/books.service';
import { BookFormPayload } from '../shared/components/book-form/book-form.component';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookPageComponent implements OnInit, OnDestroy {
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  book$!: Observable<IBook>;

  isEdit = false;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((params) => {
        const { isEdit } = params;
        this.isEdit = isEdit;
      });

    this.route.params
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((params) => {
        const { id } = params;
        this.book$ = this.booksService.getBookByID(Number(id));
      });
  }

  editBook(event: BookFormPayload, book: IBook) {
    if (book.id === undefined) return;
    this.booksService.editBookByID(
      book.id,
      new Book({
        ...book,
        title: event.title,
        subtitle: event.subtitle,
        languages: [event.language.name],
        authors: [event.author],
        bookshelves: [event.genre],
        number_of_pages: event.count_of_page,
      })
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete;
  }
}
