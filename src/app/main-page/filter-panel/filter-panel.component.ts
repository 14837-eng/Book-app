import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/core/interfaces/author.interface';
import { IBookFilter } from 'src/app/core/interfaces/book.interface';
import { ILangugage } from 'src/app/core/interfaces/languages.interface';
import { AuthorsService } from 'src/app/core/services/authors.service';
import { BooksService } from 'src/app/core/services/books.service';
import { GenresService } from 'src/app/core/services/genres.service';
import { LanguagesService } from 'src/app/core/services/languages.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPanelComponent implements OnInit {
  languages: ILangugage[] = [];
  authors: IAuthor[] = [];
  genres: string[] = [];
  filters!: IBookFilter;

  constructor(
    private languagesService: LanguagesService,
    private authorsService: AuthorsService,
    private genresService: GenresService,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.filters = this.booksService.getFilters();
    this.languages = this.languagesService.getLangs();
    this.authors = this.authorsService.getAuthors();
    this.genres = this.genresService.getGenres();
  }

  changeLang(lang: string) {
    this.filters.language = lang;
    this.booksService.setLangFilter(lang);
    this.booksService.getBooks();
  }

  changeAuthor(author_id: number) {
    this.filters.author_id = author_id;
    this.booksService.setAuthorFilter(author_id);
    this.booksService.getBooks();
  }

  changeGenre(genre: string) {
    this.filters.shelve = genre;
    this.booksService.setGenreFilter(genre);
    this.booksService.getBooks();
  }
}
