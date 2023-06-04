import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IBook } from 'src/app/core/interfaces/book.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent implements OnInit {
  @Input() book!: IBook;
  @Input() mini = false;

  constructor() {}

  ngOnInit(): void {}
}
