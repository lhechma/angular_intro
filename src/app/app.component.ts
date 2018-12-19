import { Component } from '@angular/core';
import { TextEditorComponent } from './text-editor.component';

@Component({
  selector: 'app-root',
  template: `
  <h1 appColorSwitch>App Component</h1>
  <p> Word Count: {{wordCount}}</p>
  <app-text-editor (countEmitter)="updateWordCount($event)">
  <div class="tester">
  <button>Do you see me?</button>
  </div>
  </app-text-editor>
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
