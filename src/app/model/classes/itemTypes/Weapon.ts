import { itemTypeNames } from "../../enums/itemTypeNames.enum";
import { IItemType } from "../../interfaces/IItemType";

export class Weapon implements IItemType, IWeapon{

    itemType: itemTypeNames = itemTypeNames.Weapon;
    maxStackSize: number = 1;
    itemIcon: string = "Sword.png";

    constructor(weapon: IWeapon){
        this.name = weapon.name
        this.damage = weapon.damage
        this.speed = weapon.speed
        this.ranged = weapon.ranged
        this.id = Math.floor(Math.random() * (10000 - 99999 + 1) + 99999)
        this.price = weapon.price
    }
    price: number;

    ranged: boolean;
    damage: number;
    speed: number;
    name: string;
    id: number;

    get dps(): number{
        
        return Math.round((this.damage * this.speed) * 100)/100;
    }
}
export interface IWeapon{
    name: string
    damage: number
    speed: number
    price: number;
    ranged: boolean
}