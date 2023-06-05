import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject, take, takeUntil } from 'rxjs';
import { IAuthor } from '../core/interfaces/author.interface';
import { Author } from '../core/models/author.model';
import { AuthorsService } from '../core/services/authors.service';
import { AuthorFormPayload } from '../shared/components/author-form/author-form.component';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorPageComponent implements OnInit {
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  author$!: Observable<IAuthor>;

  isEdit = false;

  constructor(
    private authorsService: AuthorsService,
    private router: Router,
    private snackBar: MatSnackBar,
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
        this.author$ = this.authorsService.getAuthorByID(Number(id));
      });
  }

  editAuthor(event: AuthorFormPayload, author: IAuthor) {
    if (author.id === undefined) return;
    this.authorsService.editAuthorByID(
      author.id,
      new Author({
        ...author,
        name: event.name,
        birth_year: event.birth_year,
        death_year: event.death_year,
      })
    );
    this.snackBar.open('success', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    });
    this.router.navigate(['/authors']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete;
  }
}
