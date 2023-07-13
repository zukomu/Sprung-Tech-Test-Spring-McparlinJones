import { itemTypeNames } from "../../enums/itemTypeNames.enum";
import { IItemType } from "../../interfaces/IItemType";

export class Food implements IItemType, IFood{
    
    itemType: itemTypeNames = itemTypeNames.Food;
    maxStackSize: number = 10;
    itemIcon: string = "Apple.png";

    constructor(food: IFood){
        this.name = food.name
        this.price = food.price
        this.healthRestored = food.healthRestored
    }

    name: string;
    healthRestored: number;
    price: number;
}
export interface IFood{
    name: string;
    healthRestored: number;
    price: number;
}