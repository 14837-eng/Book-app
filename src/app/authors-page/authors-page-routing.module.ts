import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsPageComponent } from './authors-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsPageRoutingModule {}
