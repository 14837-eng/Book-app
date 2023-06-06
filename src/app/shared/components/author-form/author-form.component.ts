import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthor } from 'src/app/core/interfaces/author.interface';

export interface AuthorFormPayload {
  name: string;
  birth_year: number;
  death_year: number;
}

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorFormComponent implements OnInit {
  @Input() author!: IAuthor;
  @Input() title = '';

  @Output() onSave: EventEmitter<AuthorFormPayload> = new EventEmitter();

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  formGroupInitWithoutAuthorData() {
    this.formGroup = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      birth_year: this.fb.control(0, [Validators.required]),
      death_year: this.fb.control(0, [Validators.required]),
    });
  }

  formGroupInitByAuthor() {
    this.formGroup = this.fb.group({
      name: this.fb.control(this.author.name, [Validators.required]),
      birth_year: this.fb.control(this.author.birth_year, [
        Validators.required,
      ]),
      death_year: this.fb.control(this.author.death_year, [
        Validators.required,
      ]),
    });
  }

  formGroupInit() {
    if (!this.author) {
      this.formGroupInitWithoutAuthorData();
      return;
    }
    this.formGroupInitByAuthor();
  }

  ngOnInit(): void {
    this.formGroupInit();
  }

  onSubmit(event: any) {
    if (this.formGroup.invalid) return;
    this.onSave.next(this.formGroup.value);
  }
}
