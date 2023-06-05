import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IAuthor } from 'src/app/core/interfaces/author.interface';

export interface ActionButtonClickPayload {
  author: IAuthor;
  action: string;
}

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorItemComponent implements OnInit {
  @Input() author!: IAuthor;

  @Input() actionBtns: string[] = [];
  @Output() onActionBtnClick: EventEmitter<ActionButtonClickPayload> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(action: string) {
    this.onActionBtnClick.next({
      author: this.author,
      action,
    });
  }
}
