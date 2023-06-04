import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './book-page.component';
import { BookPageRoutingModule } from './book-page-routing.module';

@NgModule({
  declarations: [BookPageComponent],
  imports: [CommonModule, BookPageRoutingModule],
})
export class BookPageModule {}
