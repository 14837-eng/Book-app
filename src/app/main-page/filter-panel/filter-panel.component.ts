import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ILangugage } from 'src/app/core/interfaces/languages.interface';
import { BooksService } from 'src/app/core/services/books.service';
import { LanguagesService } from 'src/app/core/services/languages.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPanelComponent implements OnInit {
  languages: ILangugage[] = [];

  constructor(
    private languagesService: LanguagesService,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.languages = this.languagesService.getLangs();
  }

  changeLang(event: string) {
    this.booksService.setLangFilter(event);
    this.booksService.getBooks();
  }
}
