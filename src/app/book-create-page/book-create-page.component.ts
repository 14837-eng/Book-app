import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../core/models/book.model';
import { BooksService } from '../core/services/books.service';
import { BookFormPayload } from '../shared/components/book-form/book-form.component';

@Component({
  selector: 'app-book-create-page',
  templateUrl: './book-create-page.component.html',
  styleUrls: ['./book-create-page.component.scss'],
})
export class BookCreatePageComponent implements OnInit {
  constructor(private booksService: BooksService, private router: Router) {}

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
    this.router.navigate(['/']);
  }
}
