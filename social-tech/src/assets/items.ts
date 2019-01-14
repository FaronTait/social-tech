import {Item} from '../backend/SharedClasses/Item';

export const ITEM_LIST = {
    items: [
        new Item('Transport', 50, 'basic-transport', 'Need'),
        new Item('food', 25, 'basic-food', 'Need'),
        new Item('food', 25, 'basic-education', 'Need'),
        new Item('food', 25, 'basic-housing', 'Need'),
        new Item('food', 25, 'luxury-car', 'Want'),
        new Item('food', 25, 'luxury-clothes', 'Want'),
        new Item('food', 25, 'luxury-house', 'Want'),
        new Item('food', 25, 'smartphone', 'Want'),
        new Item('food', 25, 'luxury-clothes', 'Want'),
    ]
};
