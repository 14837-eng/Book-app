import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
