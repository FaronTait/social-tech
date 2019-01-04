import {Item} from "../SharedClasses/Item";
import { Decision } from "../SharedClasses/Decision";
import {SessionDataObject} from "../SessionDataObject/SessionDataObject";
import { PlayerInfo } from "../SharedClasses/PlayerInfo";

export class Backend {
    private m_sessionDataObject: SessionDataObject;
    private m_walletValue: number;
    private m_itemList: Item[];
    private m_itemListIndex: number;

    private static m_instance: Backend = null;

    private constructor() {
        this.m_sessionDataObject = new SessionDataObject();
        this.m_itemListIndex = 0;
    }

    static getInstance(): Backend {
        if (Backend.m_instance == null) {
            Backend.m_instance = new Backend()
        }
        return Backend.m_instance;
    }

    setItemArray(items: Item[]) {
        this.m_itemList = items;
        this.m_itemListIndex = 0;
    }

    setWalletValue(walletValue: number) {
        this.m_walletValue = walletValue;
    }

    makeDecision(decision: boolean) {
        this.m_itemListIndex += 1;
        if (this.m_itemListIndex >= this.m_itemList.length) {
            //TODO: Decide what the best behavior would be for when the end of a the item list is reached
            console.log("The end of the item list has been reached");
            return null
        }
        let newItem = this.m_itemList[this.m_itemListIndex];
        if (decision) {
            this.m_walletValue -= newItem.value;
        }

        let decisionObject = new Decision(newItem, decision, this.m_walletValue);
        this.m_sessionDataObject.addDecision(decisionObject);

        return {newWalletValue: this.m_walletValue, newItem: newItem}
    }

    getSessionDecisions(): Decision[] {
        return this.m_sessionDataObject.getDecisionList();
    }

    sendBasicPlayerInfo(playerInfo: PlayerInfo): void {
        this.m_sessionDataObject.addPlayerInfo(playerInfo);
    }

    getStartingInfo() {
        return {newWalletValue: this.m_walletValue, newItem: this.m_itemList[0]}
    }
}