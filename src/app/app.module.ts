import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SummaryComponent} from './summary.component';
import {TextEditorComponent} from './text-editor.component';
import {ClickToSwitchDirective} from './click-to-switch.directive';
import {PersonListComponent} from './person-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacePipe} from './shared/convert-to-space';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SummaryComponent,
    TextEditorComponent,
    ClickToSwitchDirective,
    PersonListComponent,
    ConvertToSpacePipe
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
