import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsPageComponent } from './authors-page.component';
import { AuthorsPageRoutingModule } from './authors-page-routing.module';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthorsPageComponent, AuthorsListComponent],
  imports: [
    CommonModule,
    AuthorsPageRoutingModule,
    SharedModule,
    MatButtonModule,
  ],
})
export class AuthorsPageModule {}
