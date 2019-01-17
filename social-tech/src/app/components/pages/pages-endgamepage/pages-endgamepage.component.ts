import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../../backend.service';
import {Decision} from '../../../../backend/SharedClasses/Decision';

@Component({
  selector: 'app-pages-endgamepage',
  templateUrl: './pages-endgamepage.component.html',
  styleUrls: ['./pages-endgamepage.component.css']
})

export class PagesEndgamepageComponent implements OnInit {
  backend: BackendService;
  decisionList: Decision[];

  constructor(backendService: BackendService) {
    this.backend = backendService;

  }

  ngOnInit() {
    this.decisionList = this.backend.getDecisionList();
    console.log('Session Decisions gotten');
  }
}
