import { itemTypeNames } from "../../enums/itemTypeNames.enum";
import { IItemType } from "../../interfaces/IItemType";

export class Potion implements IItemType, IPotion{

    itemType: itemTypeNames = itemTypeNames.Potion;
    maxStackSize: number = 1;
    itemIcon: string = "Flask.png";

    constructor(potion: IPotion){
        this.name = potion.name
        this.effect = potion.effect
        this.price = potion.price
    }
    price: number;
    effect: IEffect
    name: string;
}
export interface IPotion{
    effect: IEffect;
    name: string;
    price: number;
}
export interface IEffect{
    name: string;
    description: string;
    potency: number
    duration: number;
}