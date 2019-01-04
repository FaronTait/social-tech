import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-gamepage',
  templateUrl: './pages-gamepage.component.html',
  styleUrls: ['./pages-gamepage.component.css']
})
export class PagesGamepageComponent implements OnInit {

  wallet: String = 'R60';

  constructor() { }

  ngOnInit() {
  }


  buyFunction() {}
  dontBuyFunction() {}
}
