import {Item} from '../SharedClasses/Item';
import { Decision } from '../SharedClasses/Decision';
import {SessionDataObject} from '../SessionDataObject/SessionDataObject';
import { PlayerInfo } from '../SharedClasses/PlayerInfo';
import {DataBaseService} from '../../app/data-base.service';

export class Backend {
    private m_sessionDataObject: SessionDataObject;
    private m_walletValue: number;
    private m_itemList: Item[];
    private m_itemListIndex: number;
    private m_dataBaseService;

    public constructor(dataBaseService: DataBaseService) {
        this.m_sessionDataObject = new SessionDataObject();
        this.m_itemListIndex = 0;
        this.m_dataBaseService = dataBaseService;
    }

    setItemArray(items: Item[]) {
        this.m_itemList = items;
        this.m_itemListIndex = 0;
    }

    setWalletValue(walletValue: number) {
        this.m_walletValue = walletValue;
    }

    makeDecision(decision: boolean) {
        if (this.m_itemListIndex < this.m_itemList.length) {
            const decisionObject = new Decision(this.m_itemList[this.m_itemListIndex], decision, this.m_walletValue);
            this.m_sessionDataObject.addDecision(decisionObject);
        }

        this.m_itemListIndex += 1;
        if (this.m_itemListIndex >= this.m_itemList.length) {
            return null;
        }
        const newItem = this.m_itemList[this.m_itemListIndex];
        if (decision) {
            this.m_walletValue -= newItem.value;
        }

        return {newWalletValue: this.m_walletValue, newItem: newItem};
    }

    getSessionDecisions(): Decision[] {
        this.m_dataBaseService.saveSessionData(this.m_sessionDataObject.getJSON());
        return this.m_sessionDataObject.getDecisionList();
    }

    sendBasicPlayerInfo(playerInfo: PlayerInfo): void {
        this.m_sessionDataObject.addPlayerInfo(playerInfo);
    }

    getStartingInfo() {
        return {newWalletValue: this.m_walletValue, newItem: this.m_itemList[0]};
    }
}
