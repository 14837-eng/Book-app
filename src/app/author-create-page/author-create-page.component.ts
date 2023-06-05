import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Author } from '../core/models/author.model';
import { AuthorsService } from '../core/services/authors.service';
import { AuthorFormPayload } from '../shared/components/author-form/author-form.component';

@Component({
  selector: 'app-author-create-page',
  templateUrl: './author-create-page.component.html',
  styleUrls: ['./author-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorCreatePageComponent implements OnInit {
  constructor(
    private authorsService: AuthorsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  saveAuthor(event: AuthorFormPayload) {
    this.authorsService.createAuthor(
      new Author({
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
}
