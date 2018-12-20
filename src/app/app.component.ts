import { Component, ViewChild } from '@angular/core';
import { TextEditorComponent } from './text-editor.component';

@Component({
  selector: 'app-root',
  template: `
  <h1 appColorSwitch>App Component</h1>
  <h1>One Way Binding</h1>
  <input #in (keyup)="updateInput(in.value)">
  <h2> {{myInput}}</h2>
  <h1>Two Way Binding </h1>
  <input type="text" [(ngModel)]="myInput"/>

  <h1> parent Child comm </h1>
  <app-text-editor></app-text-editor>

  <p> In parent scope, Word Count is {{wordCount}}</p>
  <app-person-list></app-person-list>
  `

})
export class AppComponent {
  @ViewChild(TextEditorComponent)
  textEditorComponent: TextEditorComponent;
  toggle: boolean = true;
  title = 'first-app';
  wordCount = 0;
  myInput: string;

  updateWordCount(count: number) {
      this.wordCount = count;
  }

  updateInput(input: string) {
    this.myInput = input;
  }

}
