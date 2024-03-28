import {} from '@angular/core';
import { Routes } from '@angular/router';
import { CategoriesHomeComponent } from './page/categories-home/categories-home.component';

export const CATEGORIES_ROUTES: Routes = [
  {
    path: '',
    component: CategoriesHomeComponent,
  },
];
