import {Component, OnInit, OnDestroy} from '@angular/core';
import {PeopleServiceService} from './people-service.service';
import {IPerson} from './person';
import {Observable} from 'rxjs';

@Component({
selector : 'app-person-list',
template : `
           <img [src]="PEOPLE_IMG_URL" [style.width.px]="IMAGE_WIDTH_PX" [style.margin.px]="IMAGE_MARGIN_PX"/>
           <div *ngFor="let person of people">
           <ul>
               <li *ngIf="person.champ">
                  {{person.name | convertToSpaces:'-'}} -> {{person.salary | currency:'CAD':'symbol':'1.2-2' }}
               </li>
               </ul>
           </div>
          `,
providers : [PeopleServiceService]
})



export class PersonListComponent implements OnInit, OnDestroy {

  readonly PEOPLE_IMG_URL = 'assets/images/female_male.png';
  readonly IMAGE_WIDTH_PX = '100';
  readonly IMAGE_MARGIN_PX = '7';
  inputField = 'initial';
  myInput: string;
  people: IPerson[] ;
  error: string;

  constructor(private peopleService: PeopleServiceService) {}
  ngOnDestroy(): void {
     console.log('destroyed');
  }
  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      people => this.people = people,
      error => this.error = error
      );

    console.log('People component created');
  }

   setInput(input){
   this.myInput = input;
   }
}
