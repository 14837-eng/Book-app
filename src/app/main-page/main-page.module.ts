import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainPageComponent, BooksListComponent, FilterPanelComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatCardModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class MainPageModule {}
