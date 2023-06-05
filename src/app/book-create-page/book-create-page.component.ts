import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Book } from '../core/models/book.model';
import { BooksService } from '../core/services/books.service';
import { BookFormPayload } from '../shared/components/book-form/book-form.component';

@Component({
  selector: 'app-book-create-page',
  templateUrl: './book-create-page.component.html',
  styleUrls: ['./book-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCreatePageComponent implements OnInit {
  constructor(
    private booksService: BooksService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  saveBook(event: BookFormPayload) {
    this.booksService.createBook(
      new Book({
        title: event.title,
        subtitle: event.subtitle,
        languages: [event.language.name],
        authors: [event.author],
        bookshelves: [event.genre],
        number_of_pages: event.count_of_page,
      })
    );
    this.snackBar.open('success', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    });
    this.router.navigate(['/']);
  }
}
