import {Item} from "../SharedClasses/Item";

export class Backend {
    private m_walletValue: number;
    private m_itemList: Item[];
    private m_itemListIndex: number;

    constructor(walletValue: number, itemList: Item[]) {
        this.m_walletValue = walletValue;
        this.m_itemListIndex = 0;
        this.m_itemList = itemList;
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

        //TODO: Allow the make decision function to add a decision to a sessionData obj.

        return {newWalletValue: this.m_walletValue, newItem: newItem}
    }

    getStartingInfo() {
        return {newWalletValue: this.m_walletValue, newItem: this.m_itemList[0]}
    }
}``