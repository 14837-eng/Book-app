import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorCreatePageComponent } from './author-create-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorCreatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorCreatePageRoutingModule {}
