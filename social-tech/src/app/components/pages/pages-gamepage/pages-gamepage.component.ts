import { Component, OnInit } from '@angular/core';
import {Backend} from "../../../../backend/frontendToBackendCommunication/Backend";
import {Item} from "../../../../backend/SharedClasses/Item";
import {ITEM_LIST} from "../../../../assets/items"
import {Router} from "@angular/router";

@Component({
  selector: 'app-pages-gamepage',
  templateUrl: './pages-gamepage.component.html',
  styleUrls: ['./pages-gamepage.component.css']
})
export class PagesGamepageComponent implements OnInit {

  walletValue: number;
  wallet: String;
  currentItem: Item;
  backend: Backend;
  routerLinkStatus: String;
  router: Router;

  constructor(router: Router) {
    this.walletValue = 1000;

    this.backend = Backend.getInstance();
    this.backend.setWalletValue(this.walletValue);
    this.backend.setItemArray(ITEM_LIST.items);
    this.currentItem = this.backend.getStartingInfo().newItem;
    this.wallet = 'R' + this.walletValue;
    this.routerLinkStatus = 'inactive';
    this.router = router;
  }

  ngOnInit() {
  }


  buyFunction() {
    let newInfo = this.backend.makeDecision(true);
    if (newInfo == null) {
      this.router.navigateByUrl("/endgamepage");
    }
    this.walletValue = newInfo.newWalletValue;
    this.currentItem = newInfo.newItem;
    this.wallet = 'R' + this.walletValue;
  }

  dontBuyFunction() {
    let newInfo = this.backend.makeDecision(false);
    if (newInfo == null) {
      this.router.navigateByUrl("/endgamepage");
    }
    this.currentItem = newInfo.newItem;
  }
}
