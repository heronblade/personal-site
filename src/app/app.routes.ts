import { provideRouter, RouterConfig } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: RouterConfig = [
  { path: 'test', component: TestComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
