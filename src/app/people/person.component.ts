import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
     <h3> Person Detail </h3>
     {{name}}
    `
})
export class PersonComponent {
   name: string;
   constructor(activatedRoute: ActivatedRoute) {
     console.log('Person Component');
     activatedRoute.params.subscribe(params => this.name = params['name']);
   }

}
