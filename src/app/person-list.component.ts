import {Component, OnInit, OnDestroy} from '@angular/core';


@Component({
selector : 'app-person-list',
template : `
           <img [src]="PEOPLE_IMG_URL" [style.width.px]="IMAGE_WIDTH_PX" [style.margin.px]="IMAGE_MARGIN_PX">


           <div *ngFor="let person of people">
           <ul>
               <li *ngIf="person.champ">
                  {{person.name | convertToSpaces:'-'}} -> {{person.salary | currency:'CAD':'symbol':'1.2-2' }}
               </li>
               </ul>
           </div>
           <h1>One Way Binding</h1>
           <input #in (keyup)="setInput(in.value)">
           <h2> {{myInput}}</h2>
           <h1>Two Way Binding </h1>
           <input type="text" [(ngModel)]="inputField"/>
           <h2>{{inputField}}</h2>

            `
})



export class PersonListComponent implements OnInit, OnDestroy {

  readonly PEOPLE_IMG_URL = '../assets/images/female_male.png';
  readonly IMAGE_WIDTH_PX = '100';
  readonly IMAGE_MARGIN_PX = '7';
  inputField = 'initial';

  ngOnDestroy(): void {
     console.log('destroyed');
  }
  ngOnInit(): void {
    console.log('created');
  }
   myInput: string;
   people: Array<Object> = [
     {name: 'Mike-Tyson', champ: false, salary: 2000.24},
     {name: 'Ronaldo-Christiano', champ: true, salary: 2100.6588},
     {name: 'Jordan-Micheal', champ: true, salary: 2200.24},
   ];
   setInput(input){
   this.myInput = input;
   }
}
