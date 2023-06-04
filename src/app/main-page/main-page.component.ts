import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BooksService } from '../core/services/books.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    this.booksService.setSearch(value);
    this.booksService.getBooks();
  }
}
