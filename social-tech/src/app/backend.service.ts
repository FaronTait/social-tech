import { Injectable } from '@angular/core';
import {Backend} from '../backend/frontendToBackendCommunication/Backend';
import {DataBaseService} from './data-base.service';
import {Item} from '../backend/SharedClasses/Item';
import {Decision} from '../backend/SharedClasses/Decision';
import {PlayerInfo} from '../backend/SharedClasses/PlayerInfo';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private backend: Backend;
  private dataBaseService: DataBaseService;

  constructor(dataBaseService: DataBaseService) {
    this.dataBaseService = dataBaseService;
  }

  public setWalletValue(walletValue: number) {
    this.backend.setWalletValue(walletValue);
  }

  public setItemArray(itemArray: Item[]) {
    this.backend.setItemArray(itemArray);
  }

  public makeDecision(choice: boolean) {
    return this.backend.makeDecision(choice);
  }

  public getDecisionList(): Decision[] {
    return this.backend.getSessionDecisions();
  }

  public sendBasicPlayerInfo(playerInfo: PlayerInfo) {
    this.backend.sendBasicPlayerInfo(playerInfo);
  }

  public getStartingInfo() {
    return this.backend.getStartingInfo();
  }

  public restartBackend() {
    this.backend = new Backend(this.dataBaseService);
  }
}
