import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
