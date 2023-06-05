import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreatePageComponent } from './book-create-page.component';
import { BookCreatePageRoutingModule } from './book-create-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [BookCreatePageComponent],
  imports: [
    CommonModule,
    BookCreatePageRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
  ],
})
export class BookCreatePageModule {}
