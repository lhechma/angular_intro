import { Component, EventEmitter, Output, Inject, forwardRef} from '@angular/core';
import {HomeComponent} from './home.component';

@Component({
  selector : 'app-text-editor',
  template : `
       <h1> My Editor</h1>
        <textarea (keyup)="countWords($event)"></textarea>
       `
})
export class TextEditorComponent {

  constructor(@Inject(forwardRef(() => HomeComponent)) homeComponent: HomeComponent) {}

  countWords(event: Event) {
    const textArea = event.target as HTMLTextAreaElement;
    const count = (textArea.value.match(/\S+/g) || []).length;
   //  this.homeComponent.updateWordCount(count);
  }

}
