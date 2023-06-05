import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreatePageComponent } from './book-create-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookCreatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookCreatePageRoutingModule {}
