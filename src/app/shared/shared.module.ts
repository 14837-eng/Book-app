import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BookItemComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [BookItemComponent],
})
export class SharedModule {}
