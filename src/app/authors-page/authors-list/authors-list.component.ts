import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { IAuthor } from 'src/app/core/interfaces/author.interface';
import { AuthorsService } from 'src/app/core/services/authors.service';
import { ActionButtonClickPayload } from 'src/app/shared/components/author-item/author-item.component';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsListComponent implements OnInit {
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
  authors: IAuthor[] = [];

  constructor(
    private authorsService: AuthorsService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authorsService
      .listenAuthors()
      .pipe(takeUntil(this.destroy$))
      .subscribe((authors) => {
        this.authors = authors;
        this.cd.markForCheck();
      });

    this.authorsService.getAuthors();
  }

  onActionClick(event: ActionButtonClickPayload) {
    if (event.action === 'edit') {
      this.router.navigate(['/author/' + event.author?.id], {
        queryParams: {
          isEdit: true,
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete;
  }
}
