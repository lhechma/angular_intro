import { Component, EventEmitter, Output, Inject, forwardRef} from '@angular/core';
import {AppComponent} from './app.component';
@Component({
  selector : 'app-text-editor',
  template : `
       <h1> My Editor</h1>
        <textarea (keyup)="countWords($event)"></textarea>
       `
})
export class TextEditorComponent {

  constructor(@Inject(forwardRef(() => AppComponent)) private  appComponent: AppComponent) {}

  countWords(event: Event) {
    const textArea = event.target as HTMLTextAreaElement;
    const count = (textArea.value.match(/\S+/g) || []).length;
     this.appComponent.updateWordCount(count);
  }

 // @Output() countEmitter = new EventEmitter<number>();
 //<textarea (keyup)="countWords($event)"></textarea>
  /*countWords(event: Event) {
    const textArea = event.target as HTMLTextAreaElement;
    const count = (textArea.value.match(/\S+/g) || []).length;
    this.countEmitter.emit(count);
  }*/
}
