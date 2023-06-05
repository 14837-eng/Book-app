import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorCreatePageComponent } from './author-create-page.component';
import { AuthorCreatePageRoutingModule } from './author-create-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AuthorCreatePageComponent],
  imports: [
    CommonModule,
    AuthorCreatePageRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
  ],
})
export class AuthorCreatePageModule {}
