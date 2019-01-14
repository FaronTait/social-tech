export class Item {
    // TODO: Complete the definition of the item class.
    public value: number;
    public name: string;
    public priority: string;
    public id: string;

    constructor(name: string, value: number, id: string, priority: string) {
        this.value = value;
        this.name = name;
        this.priority = priority;
        this.id = id;
    }
}