import { itemTypeNames } from "../../enums/itemTypeNames.enum";
import { IItemType } from "../../interfaces/IItemType";

export class CraftingComponent implements IItemType{

    itemType: itemTypeNames = itemTypeNames.CraftingComponent;
    maxStackSize: number = 10;
    itemIcon: string = "Herbs.png";

    constructor(itemName: string, price: number){
        this.name = itemName
        this.price = price
    }
    
    name: string;
    price: number;
}