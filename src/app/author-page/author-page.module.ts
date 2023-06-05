import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPageComponent } from './author-page.component';
import { AuthorPageRoutingModule } from './author-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthorPageComponent],
  imports: [
    CommonModule,
    AuthorPageRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
  ],
})
export class AuthorPageModule {}
