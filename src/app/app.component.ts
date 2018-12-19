import { Component } from '@angular/core';
import { TextEditorComponent } from './text-editor.component';

@Component({
  selector: 'app-root',
  template: `
  <h1 appColorSwitch>App Component</h1>
  <app-text-editor>
  </app-text-editor>
  <p> In parent scope, Word Count is {{wordCount}}</p>
  <app-person-list></app-person-list>
  `,
  styles : [` h1 {
        color: red
  }`]
})
export class AppComponent {
  title = 'first-app';
  wordCount = 0;

  updateWordCount(count: number) {
      this.wordCount = count;
  }

}
