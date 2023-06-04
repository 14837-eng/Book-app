import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  @Input() placeholder = '';
  @Input() value = '';

  @Output() onSearch = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.value = value;
    this.onSearch.next(value);
  }
}
