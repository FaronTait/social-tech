export class Item {
    // TODO: Complete the definition of the item class.
    public value: number;
    public name: string;
    public svg: string;
    public priority: string;
    public id: string;

    constructor (name: string, value: number,  id: string, svg: string, priority: string) {
        this.value = value;
        this.name = name;
        this.svg = svg;
        this.priority = priority;
        this.id = id;
    }
}