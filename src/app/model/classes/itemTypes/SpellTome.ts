import { itemTypeNames } from "../../enums/itemTypeNames.enum";
import { spellSkillLevel } from "../../enums/spellSkillLevel.enum";
import { IItemType } from "../../interfaces/IItemType";
import { Spell } from "../spell";

export class SpellTome implements IItemType{

    itemType: itemTypeNames = itemTypeNames.SpellTome;
    maxStackSize: number = 1;
    itemIcon: string = "Book.png";

    constructor(spell: Spell){
        this.spell = spell
        this.name = spell.name
        this.price = (spell.skillLevel + 2) * 100
    }
    price: number;
    
    spell: Spell;
    name: string;
}