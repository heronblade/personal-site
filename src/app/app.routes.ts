import { provideRouter, RouterConfig } from '@angular/router';
import { TestComponent } from './components/test/test.component';

const routes: RouterConfig = [
  { path: 'test', component: TestComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
