import {Item} from "../SharedClasses/Item";

// This object was created according to the flowchart

export class Decision {
    private m_item: Item;
    private m_wasBought: boolean;
    private m_walletValueAtThatTime: number;

    constructor(item: Item, wasBought: boolean, walletValueAtThatTime: number) {
        this.m_item = item;
        this.m_wasBought = wasBought;
        this.m_walletValueAtThatTime = walletValueAtThatTime;
    }
}