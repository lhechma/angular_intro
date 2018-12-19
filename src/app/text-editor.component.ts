import { Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector : 'app-text-editor',
  template : `
       <h1> My Editor</h1>
       <textarea (keyup)="countWords($event)"></textarea>
        <ng-content select=".tester"></ng-content>
       `
})
export class TextEditorComponent {
  @Output() countEmitter = new EventEmitter<number>();
  countWords(event: Event) {
    const textArea = event.target as HTMLTextAreaElement;
    const count = (textArea.value.match(/\S+/g) || []).length;
    this.countEmitter.emit(count);
  }
}
