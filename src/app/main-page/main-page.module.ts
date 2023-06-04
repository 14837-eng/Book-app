import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainPageComponent, BooksListComponent],
  imports: [CommonModule, MainPageRoutingModule, SharedModule],
})
export class MainPageModule {}
