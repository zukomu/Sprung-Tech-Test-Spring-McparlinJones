import { itemTypeNames } from "../enums/itemTypeNames.enum"

export interface IItemType{
    maxStackSize: number
    itemIcon: string
    name: string
    itemType: itemTypeNames
    price: number
}