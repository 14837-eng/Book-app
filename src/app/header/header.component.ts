import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { environment } from 'src/environments/environment';

export interface HeaderItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() list: HeaderItem[] = [
    {
      name: 'Главная',
      link: '/',
    },
  ];

  appName = '';

  constructor() {}

  ngOnInit(): void {
    this.appName = environment.appName;
  }
}
