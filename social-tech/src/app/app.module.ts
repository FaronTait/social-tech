import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesHomepageComponent} from "./components/pages/pages-homepage/pages-homepage.component";
import { PagesGamepageComponent } from './components/pages/pages-gamepage/pages-gamepage.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesHomepageComponent,
    PagesGamepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
