import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomePageComponent, ROUTER_DIRECTIVES, MdIcon, MD_PROGRESS_BAR_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  providers: [MdIconRegistry]
})

export class AppComponent implements OnInit{
  title = 'app works!';

  ngOnInit() {
    console.log('init');
  }
}
