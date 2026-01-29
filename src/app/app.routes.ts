import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about').then((m) => m.About),
  },
  {
    path: 'tours',
    loadComponent: () => import('./pages/tours').then((m) => m.Tours),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery').then((m) => m.Gallery),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog').then((m) => m.Blog),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
