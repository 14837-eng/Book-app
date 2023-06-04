import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BooksService } from '../core/services/books.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  search = '';

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.search = this.booksService.getSearchValue();
  }

  onSearch(value: string) {
    this.search = value;
    this.booksService.setSearch(value);
    this.booksService.getBooks();
  }
}
