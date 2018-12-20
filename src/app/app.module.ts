import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SummaryComponent} from './summary.component';
import {TextEditorComponent} from './text-editor.component';
import {ClickToSwitchDirective} from './click-to-switch.directive';
import {PersonListComponent} from './people/person-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ConvertToSpacePipe} from './shared/convert-to-space';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PersonFormComponent } from './people/person-form.component';
import { PersonReactiveFormComponent } from './people/person-reactive-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'people', component: PersonListComponent},
      { path: 'welcome', component: HomeComponent },
      { path: 'people-form',  component: PersonFormComponent},
      { path: 'people-reactive-form',  component: PersonReactiveFormComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    SummaryComponent,
    TextEditorComponent,
    ClickToSwitchDirective,
    PersonListComponent,
    ConvertToSpacePipe,
    HomeComponent,
    PersonFormComponent,
    PersonReactiveFormComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
