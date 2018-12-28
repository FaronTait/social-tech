import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesGamepageComponent} from "./components/pages/pages-gamepage/pages-gamepage.component";
import { PagesHomepageComponent} from "./components/pages/pages-homepage/pages-homepage.component";

const routes: Routes = [

  {path: 'homepage', component: PagesHomepageComponent},
  {path: 'gamepage', component: PagesGamepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
