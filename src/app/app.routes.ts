import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Tours } from './pages/tours';
import { Gallery } from './pages/gallery';
import { Blog } from './pages/blog';
import { Contact } from './pages/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'tours', component: Tours },
  { path: 'gallery', component: Gallery },
  { path: 'blog', component: Blog },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
