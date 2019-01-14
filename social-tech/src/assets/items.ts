import {Item} from '../backend/SharedClasses/Item';

export const ITEM_LIST = {
    items: [
        new Item('Transport', 50, 'basic-transport', null, 'Need'),
        new Item('food', 25, 'basic-food', null, 'Need'),
        new Item('food', 25, 'basic-education', null, 'Need'),
        new Item('food', 25, 'basic-housing', null, 'Need'),
        new Item('food', 25, 'luxury-car', null, 'Want'),
        new Item('food', 25, 'luxury-clothes', null, 'Want'),
        new Item('food', 25, 'luxury-house', null, 'Want'),
        new Item('food', 25, 'smartphone', null, 'Want'),
        new Item('food', 25, 'luxury-clothes', null, 'Want'),
    ]
};
