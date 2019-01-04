import {Backend} from "./Backend";
import {Item} from "../SharedClasses/Item";

let itemArray: Item[] = [];

for (let i = 0; i < 10; i++) {
    itemArray[i] = new Item("I is Item " + i.toString(), 10 + i * 10)
}

 let testBackend = Backend.getInstance();
testBackend.setWalletValue(1000);
testBackend.setItemArray(itemArray);

 let newInfo = testBackend.getStartingInfo();
 for (let i = 0; i < 9; i++) {
     console.log("Wallet value: " + newInfo.newWalletValue.toString() + " Item name: " + newInfo.newItem.name + " Item value: " + newInfo.newItem.value.toString());
     newInfo = testBackend.makeDecision(i % 2 == 1)
 }

 testBackend.getSessionDecisions();