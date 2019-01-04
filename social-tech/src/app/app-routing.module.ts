import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesGamepageComponent} from "./components/pages/pages-gamepage/pages-gamepage.component";
import { PagesHomepageComponent} from "./components/pages/pages-homepage/pages-homepage.component";
import { PagesSignuppageComponent } from "./components/pages/pages-signuppage/pages-signuppage.component";
import { PagesEndgamepageComponent } from "./components/pages/pages-endgamepage/pages-endgamepage.component";

const routes: Routes = [

  {path: 'homepage', component: PagesHomepageComponent},
  {path: 'gamepage', component: PagesGamepageComponent},
  {path: 'signuppage', component: PagesSignuppageComponent},
  {path: 'endgamepage', component: PagesEndgamepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
