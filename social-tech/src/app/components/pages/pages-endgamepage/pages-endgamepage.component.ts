import { Component, OnInit } from '@angular/core';
import {Backend} from '../../../../backend/frontendToBackendCommunication/Backend';
import {BackendService} from '../../../backend.service';

@Component({
  selector: 'app-pages-endgamepage',
  templateUrl: './pages-endgamepage.component.html',
  styleUrls: ['./pages-endgamepage.component.css']
})
export class PagesEndgamepageComponent implements OnInit {
  backend: BackendService;

  constructor(backendService: BackendService) {
    this.backend = backendService;
  }

  ngOnInit() {
    this.backend.getDecisionList();
    console.log('Session Decisions gotten');
  }
}
