import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../../backend.service";

@Component({
  selector: 'app-pages-homepage',
  templateUrl: './pages-homepage.component.html',
  styleUrls: ['./pages-homepage.component.css']
})
export class PagesHomepageComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.restartBackend();
  }

}
