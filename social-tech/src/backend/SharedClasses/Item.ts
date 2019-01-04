export class Item {
    // TODO: Complete the definition of the item class.
    public value: number;
    public name: string;
    public id: string;

    constructor (name: string, value: number, id: string) {
        this.value = value;
        this.name = name;
        this.id = id;
    }
}