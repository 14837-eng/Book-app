import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookFormComponent } from './components/book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [BookItemComponent, SearchComponent, BookFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [BookItemComponent, SearchComponent, BookFormComponent],
})
export class SharedModule {}
