import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IAuthor } from 'src/app/core/interfaces/author.interface';
import { AuthorsService } from 'src/app/core/services/authors.service';
import { ActionButtonClickPayload } from 'src/app/shared/components/author-item/author-item.component';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent implements OnInit {
  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
  authors: IAuthor[] = [];

  constructor(private authorsService: AuthorsService, private router: Router) {}

  ngOnInit(): void {
    this.authors = this.authorsService.getAuthors();
  }

  onActionClick(event: ActionButtonClickPayload) {
    if (event.action === 'view') {
      this.router.navigateByUrl('/author/' + event.author?.id);
    } else if (event.action === 'edit') {
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
