import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../../backend.service';
import {PlayerInfo} from '../../../../backend/SharedClasses/PlayerInfo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pages-signuppage',
  templateUrl: './pages-signuppage.component.html',
  styleUrls: ['./pages-signuppage.component.css']
})
export class PagesSignuppageComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) {}
  person = {fullName: '', contactDetails: ''};

  ngOnInit() {
  }


  submitAndStartGame() {
    const playerInfo = new PlayerInfo(this.person.fullName, this.person.contactDetails);
    this.backend.sendBasicPlayerInfo(playerInfo);
    this.router.navigateByUrl('/gamepage');
  }
}
