import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './book-page.component';
import { BookPageRoutingModule } from './book-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookPageComponent],
  imports: [CommonModule, BookPageRoutingModule, MatButtonModule, SharedModule],
})
export class BookPageModule {}
