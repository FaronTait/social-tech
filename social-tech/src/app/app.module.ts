import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesHomepageComponent} from "./components/pages/pages-homepage/pages-homepage.component";
import { PagesGamepageComponent } from './components/pages/pages-gamepage/pages-gamepage.component';
import { PagesSignuppageComponent } from './components/pages/pages-signuppage/pages-signuppage.component';
import { PagesEndgamepageComponent } from './components/pages/pages-endgamepage/pages-endgamepage.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
