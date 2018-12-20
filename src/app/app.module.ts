import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SummaryComponent} from './summary.component';
import {TextEditorComponent} from './text-editor.component';
import {ClickToSwitchDirective} from './click-to-switch.directive';
import {PersonListComponent} from './people/person-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacePipe} from './shared/convert-to-space';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'people', component: PersonListComponent},
      { path: 'welcome', component: HomeComponent },
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
    HomeComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
