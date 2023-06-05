import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./main-page/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'book/create',
    loadChildren: () =>
      import('./book-create-page/book-create-page.module').then(
        (m) => m.BookCreatePageModule
      ),
  },
  {
    path: 'book/:id',
    loadChildren: () =>
      import('./book-page/book-page.module').then((m) => m.BookPageModule),
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./authors-page/authors-page.module').then(
        (m) => m.AuthorsPageModule
      ),
  },
  {
    path: 'author',
    children: [
      {
        path: 'create',
        loadChildren: () =>
          import('./author-create-page/author-create-page.module').then(
            (m) => m.AuthorCreatePageModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./author-page/author-page.module').then(
            (m) => m.AuthorPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
