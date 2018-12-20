import { Component, ViewChild,forwardRef } from '@angular/core';
import { TextEditorComponent } from './text-editor.component';

@Component({
  selector: 'app-home-component',
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
   `

})

export class HomeComponent {
  @ViewChild(forwardRef(() => TextEditorComponent))
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
