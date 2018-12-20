import { Component, OnInit } from '@angular/core';
import {IPerson} from './person';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent implements OnInit {

  person = new IPerson();
  constructor() { }

  ngOnInit() {
  }

  save(personForm: NgForm) {
    console.log(personForm.form);
    console.log('Saved: ' + JSON.stringify(personForm.value));
  }
}
