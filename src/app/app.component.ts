import { Component } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomePageComponent]
})

export class AppComponent {
  title = 'app works!';
}
