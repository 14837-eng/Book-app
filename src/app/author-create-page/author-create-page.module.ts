import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorCreatePageComponent } from './author-create-page.component';
import { AuthorCreatePageRoutingModule } from './author-create-page-routing.module';

@NgModule({
  declarations: [AuthorCreatePageComponent],
  imports: [CommonModule, AuthorCreatePageRoutingModule],
})
export class AuthorCreatePageModule {}
