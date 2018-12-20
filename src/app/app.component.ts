import { Component, ViewChild } from '@angular/core';
import { TextEditorComponent } from './text-editor.component';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand-lg  navbar-dark bg-primary'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['/home']">Angular Showcase</a></li>
    <li><a class='nav-link' [routerLink]="['/people']">People</a></li>
    <li><a class='nav-link' [routerLink]="['/people-form']">Add person with Template form</a></li>
    <li><a class='nav-link' [routerLink]="['/people-reactive-form']">Add person with Reactive form</a></li>
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
