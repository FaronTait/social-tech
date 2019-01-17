import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesHomepageComponent} from './components/pages/pages-homepage/pages-homepage.component';
import { PagesGamepageComponent } from './components/pages/pages-gamepage/pages-gamepage.component';
import { PagesSignuppageComponent } from './components/pages/pages-signuppage/pages-signuppage.component';
import { PagesEndgamepageComponent } from './components/pages/pages-endgamepage/pages-endgamepage.component';
import { DataBaseService } from './data-base.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import {BackendService} from './backend.service';
import {FormsModule} from '@angular/forms';

import { LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PagesHomepageComponent,
    PagesGamepageComponent,
    PagesSignuppageComponent,
    PagesEndgamepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [DataBaseService, BackendService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
