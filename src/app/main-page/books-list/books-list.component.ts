import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { ActionButtonClickPayload } from 'src/app/shared/components/book-item/book-item.component';

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
    private router: Router,
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

  onActionClick(event: ActionButtonClickPayload) {
    if (event.action === 'view') {
      this.router.navigateByUrl('/book/' + event.book?.id);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete;
  }
}
