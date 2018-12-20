import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SummaryComponent} from './summary.component';
import {TextEditorComponent} from './text-editor.component';
import {ClickToSwitchDirective} from './click-to-switch.directive';
import {PersonListComponent} from './people/person-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacePipe} from './shared/convert-to-space';
import { PeopleServiceService } from './people/people-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SummaryComponent,
    TextEditorComponent,
    ClickToSwitchDirective,
    PersonListComponent,
    ConvertToSpacePipe
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
