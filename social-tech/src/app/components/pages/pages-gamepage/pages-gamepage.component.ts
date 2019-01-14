import { Component, OnInit } from '@angular/core';
import {Backend} from "../../../../backend/frontendToBackendCommunication/Backend";
import {Item} from "../../../../backend/SharedClasses/Item";
import {ITEM_LIST} from "../../../../assets/items"

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

  constructor() {
    this.walletValue = 1000;

    this.backend = Backend.getInstance();
    this.backend.setWalletValue(this.walletValue);
    this.backend.setItemArray(ITEM_LIST.items);
    this.currentItem = this.backend.getStartingInfo().newItem;
    this.wallet = 'R' + this.walletValue;
  }

  ngOnInit() {
  }


  buyFunction() {
    let newInfo = this.backend.makeDecision(true);
    this.walletValue = newInfo.newWalletValue;
    this.currentItem = newInfo.newItem;
    this.wallet = 'R' + this.walletValue;
  }

  dontBuyFunction() {
    let newInfo = this.backend.makeDecision(false);
    this.currentItem = newInfo.newItem;
  }
}
