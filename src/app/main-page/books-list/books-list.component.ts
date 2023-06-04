import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent implements OnInit, OnDestroy {
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
  books: IBook[] = [];

  constructor(
    private booksService: BooksService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.booksService
      .listenBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((books) => {
        this.books = books;
        this.cd.markForCheck();
      });

    this.booksService.getBooks();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete;
  }
}
