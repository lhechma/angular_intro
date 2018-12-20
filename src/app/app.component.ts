import { Component, ViewChild } from '@angular/core';
import { TextEditorComponent } from './text-editor.component';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['/home']">Home</a></li>
    <li><a class='nav-link' [routerLink]="['/people']">People</a></li>
  </ul>
</nav>
  <div class='container'>
      <router-outlet></router-outlet>
  </div>
  `

})
export class AppComponent {
  pageTitle = 'Welcome';
}
