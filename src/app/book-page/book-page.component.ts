import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject, take, takeUntil } from 'rxjs';
import { IBook } from '../core/interfaces/book.interface';
import { BooksService } from '../core/services/books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookPageComponent implements OnInit, OnDestroy {
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  book$!: Observable<IBook>;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((params) => {
        const { id } = params;
        this.book$ = this.booksService.getBookByID(Number(id));
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete;
  }
}
