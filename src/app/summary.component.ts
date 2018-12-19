import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  template: `
        <h1>{{message}}</h1>
        <p>{{numberOfLikes}}</p>
        <button (click)="increment($event)">Like me!</button>
        `

})
export class SummaryComponent {
  @Input() message: string;
  numberOfLikes = 0;
  increment(event: Event) {
    console.log(event.target);
    this.numberOfLikes++;
  }
}
