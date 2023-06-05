import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-create-page',
  templateUrl: './author-create-page.component.html',
  styleUrls: ['./author-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorCreatePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
