import { Component, OnInit } from '@angular/core';
import {Backend} from '../../../../backend/frontendToBackendCommunication/Backend';
import {BackendService} from '../../../backend.service';
import {Item} from "../../../../backend/SharedClasses/Item";
import {ITEM_LIST} from "../../../../assets/items";

@Component({
  selector: 'app-pages-endgamepage',
  templateUrl: './pages-endgamepage.component.html',
  styleUrls: ['./pages-endgamepage.component.css']
})

export class PagesEndgamepageComponent implements OnInit {
  backend: BackendService;
  // title: Item[] = [];
  // decisions: string;

  constructor(backendService: BackendService) {
    this.backend = backendService;
      // this.title = Item;
      // this.decisions = Item;

  }

  ngOnInit() {
    this.backend.getDecisionList();
    console.log('Session Decisions gotten');
  }
}
