import {Item} from '../SharedClasses/Item';

// This object was created according to the flowchart

export class Decision {
    public item: Item;
    public wasBought: boolean;
    public walletValueAtThatTime: number;

    constructor(item: Item, wasBought: boolean, walletValueAtThatTime: number) {
        this.item = item;
        this.wasBought = wasBought;
        this.walletValueAtThatTime = walletValueAtThatTime;
    }
}
