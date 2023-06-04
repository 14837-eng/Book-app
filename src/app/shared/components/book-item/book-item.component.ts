import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IBook } from 'src/app/core/interfaces/book.interface';

export interface ActionButtonClickPayload {
  book: IBook;
  action: string;
}

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent implements OnInit {
  @Input() book!: IBook;
  @Input() mini = false;

  @Input() actionBtns: string[] = [];
  @Output() onActionBtnClick: EventEmitter<ActionButtonClickPayload> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(action: string) {
    this.onActionBtnClick.next({
      book: this.book,
      action,
    });
  }
}
