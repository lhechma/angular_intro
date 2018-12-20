import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { IPerson } from './person';

@Component({
  selector: 'app-person-reactive-form',
  templateUrl: './person-reactive-form.component.html'

})
export class PersonReactiveFormComponent implements OnInit {

  personForm: FormGroup;
  person = new IPerson();

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.personForm = this.formbuilder.group({
       name: ['', [Validators.required, Validators.minLength(3)]],
       salary: null,
       champ: false
    });
  }

  save() {
    console.log("is valid" + this.personForm.valid);
  }

  setSalary(isChamp: boolean){
      const salaryControl = this.personForm.get('salary');
      if (isChamp) {
          salaryControl.setValidators([Validators.min(1000), Validators.max(5000)]);
      } else {
        salaryControl.clearValidators();
      }
     salaryControl.updateValueAndValidity();
  }

}
