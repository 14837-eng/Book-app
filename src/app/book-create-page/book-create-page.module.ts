import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreatePageComponent } from './book-create-page.component';
import { BookCreatePageRoutingModule } from './book-create-page-routing.module';

@NgModule({
  declarations: [BookCreatePageComponent],
  imports: [CommonModule, BookCreatePageRoutingModule],
})
export class BookCreatePageModule {}
