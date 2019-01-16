import { Component, OnInit } from '@angular/core';
import {Item} from '../../../../backend/SharedClasses/Item';
import {ITEM_LIST} from '../../../../assets/items';
import {Router} from '@angular/router';
import {BackendService} from '../../../backend.service';

@Component({
  selector: 'app-pages-gamepage',
  templateUrl: './pages-gamepage.component.html',
  styleUrls: ['./pages-gamepage.component.css']
})
export class PagesGamepageComponent implements OnInit {

  walletValue: number;
  wallet: String;
  currentItem: Item;
  backend: BackendService;
  routerLinkStatus: String;
  router: Router;

  canBuy: boolean;

  constructor(router: Router, backendService: BackendService) {
    this.walletValue = 1000;

    this.backend = backendService;
    this.backend.setItemArray(ITEM_LIST.items);
    this.backend.setWalletValue(this.walletValue);
    this.currentItem = this.backend.getStartingInfo().newItem;

    this.canBuyCheck();

    this.wallet = 'R' + this.walletValue;
    this.router = router;
  }

  ngOnInit() {
  }


  buyFunction() {
    const newInfo = this.backend.makeDecision(true);
    if (newInfo == null) {
      this.router.navigateByUrl('/endgamepage');
    } else {
      this.walletValue = newInfo.newWalletValue;
      this.currentItem = newInfo.newItem;
      this.wallet = 'R' + this.walletValue;

      this.canBuyCheck();
    }
  }

  dontBuyFunction() {
    const newInfo = this.backend.makeDecision(false);

    if (newInfo == null) {
      this.router.navigateByUrl('/endgamepage');
    } else {
      this.currentItem = newInfo.newItem;
      this.canBuyCheck();
    }
  }

  private canBuyCheck() {
    this.canBuy = this.walletValue >= this.currentItem.value;
  }
}
