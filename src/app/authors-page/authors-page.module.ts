import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsPageComponent } from './authors-page.component';
import { AuthorsPageRoutingModule } from './authors-page-routing.module';

@NgModule({
  declarations: [AuthorsPageComponent],
  imports: [CommonModule, AuthorsPageRoutingModule],
})
export class AuthorsPageModule {}
