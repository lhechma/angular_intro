import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { IPerson } from './person';

@Component({
  selector: 'app-person-reactive-form',
  templateUrl: './person-reactive-form.component.html'

})
export class PersonReactiveFormComponent implements OnInit {

  personForm: FormGroup;
  person = new IPerson();
  nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  salaryControl = new FormControl('', [Validators.required]);
  textarea = new FormControl(' ', this.countValidator);

  constructor(private formbuilder: FormBuilder) { }

  countValidator(c: FormControl): {[key: string]: any} {
    console.log(c.value);
    const wordCount = (c.value.match(/\S+/g) || []).length;
    return wordCount <= 3 ? {minwords: {min: 4, current: wordCount}} : null;
  }
  ngOnInit() {
    this.personForm = this.formbuilder.group({
       name: this.nameControl,
       salary: this.salaryControl,
       champ: false,
       textarea : this.textarea
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
