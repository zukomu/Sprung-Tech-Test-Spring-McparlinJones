import { Injectable } from '@angular/core';
import foodTypes from '../../../assets/data/json/FoodTypes.json';
import potions from '../../../assets/data/json/Potions.json';
import spells from '../../../assets/data/json/Spells.json';
import weapons from '../../../assets/data/json/Weapons.json';
import { Food, IFood } from 'src/app/model/classes/itemTypes/Food';
import { IPotion, Potion } from 'src/app/model/classes/itemTypes/Potion';
import { ISpell } from 'src/app/model/classes/spell';
import { IWeapon, Weapon } from 'src/app/model/classes/itemTypes/Weapon';
import { itemTypeNames } from 'src/app/model/enums/itemTypeNames.enum';
import { IItemType } from 'src/app/model/interfaces/IItemType';
import { SpellTome } from 'src/app/model/classes/itemTypes/SpellTome';
import { CraftingComponent } from 'src/app/model/classes/itemTypes/CraftingComponent';
import { CharacterStatusService } from '../character-status/character-status.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private characterService: CharacterStatusService) { }

  inventory: inventorySlot[] = []
  inventoryScreenRows: inventorySlot[][] = []
  numberOfRows: number = 5
  lengthOfRow: number = 8
  updateRows(){
    let rows: inventorySlot[][] = [];
    for (var i=0; i< this.numberOfRows; i++){
      rows.push([]);
      let j = this.lengthOfRow * i;
      while(rows[i].length < this.lengthOfRow){
        if (this.inventory[j]){
          rows[i].push(this.inventory[j]);
        }
        else rows[i].push(null);
        j++;
      };
    };
    this.inventoryScreenRows = rows;
  }

  addToInventory(newItem: IItemType, stackSize: number = 1){
    this.inventory.push({item: newItem, stackSize: stackSize});
    this.updateRows();
  }
  swapPlaces(fromIndex: number, toIndex: number){
    const tempContainer = {...this.inventory[fromIndex]};
    this.inventory[fromIndex] = {...this.inventory[toIndex]};
    this.inventory[toIndex] = tempContainer;
    this.updateRows();
  }
  mergeStacks(fromIndex: number, toIndex: number){
    const from = this.inventory[fromIndex];
    const to = this.inventory[toIndex];
    const totalItems = from.stackSize + to.stackSize;
    if (totalItems > from.item.maxStackSize){
      const difference = totalItems - from.item.maxStackSize;
      to.stackSize = from.item.maxStackSize;
      from.stackSize = difference;
    }
    else {
      to.stackSize = totalItems;
      this.removeFromInventory(fromIndex);
    }
    this.updateRows();
  }
  useItem(index: number){
    const item = this.inventory[index].item;
    switch (item.itemType){
      case itemTypeNames.Food:
        this.inventory[index].stackSize--;
        if (!this.inventory[index].stackSize){
          this.removeFromInventory(index);
        };
        this.characterService.restoreHealth((item as Food).healthRestored);
        break;
      case itemTypeNames.SpellTome:
        if (this.characterService.addSpell((item as SpellTome).spell)){
          this.removeFromInventory(index);
        };
        break;
      case itemTypeNames.Potion:
        if ((item as Potion).effect.name.includes("Healing") && this.characterService.health < this.characterService.maxHealth){
          this.characterService.restoreHealth((item as Potion).effect.potency);
          this.removeFromInventory(index);
        }
        else if (this.characterService.addActiveEffect((item as Potion).effect) && (item as Potion).effect.duration){
          this.removeFromInventory(index);
        };
        break;
      case itemTypeNames.Weapon:
        this.characterService.changeWeapon((item as Weapon));
        break;
    }
    this.updateRows()
  }
  removeFromInventory(index: number){
    this.inventory.splice(index, 1);
    this.updateRows();
  }
  

  // all of the methods and values below here are for demo purposes only
  populateInventory(){
    const numberOfItems = this.getRandomNumber(15, 25);
    for (var i=0; i< numberOfItems; i++){
      const type = this.itemTypes[this.getRandomNumber(0, this.itemTypes.length-1)];
      switch (type){
        case itemTypeNames.Food:
          this.addToInventory(new Food(this.demoFoodTypes[this.getRandomNumber(0, this.demoFoodTypes.length-1)]), this.getRandomNumber(1, 10));
          break;
        case itemTypeNames.SpellTome:
          this.addToInventory(new SpellTome(this.demoSpells[this.getRandomNumber(0, this.demoSpells.length-1)]));
          break;
        case itemTypeNames.Potion:
          this.addToInventory(new Potion(this.demoPotions[this.getRandomNumber(0, this.demoPotions.length-1)]));
          break;
        case itemTypeNames.CraftingComponent:
          const comp = this.craftingComponents[this.getRandomNumber(0, this.craftingComponents.length-1)];
          this.addToInventory(new CraftingComponent(comp.name, comp.price), this.getRandomNumber(1, 10));
          break;
        case itemTypeNames.Weapon:
          this.addToInventory(new Weapon(this.demoWeapons[this.getRandomNumber(0, this.demoWeapons.length-1)]));
          break;
        default:
          console.log("oops");
          break;
      }
    }
    this.updateRows();
  }
  itemTypes: itemTypeNames[] = [itemTypeNames.Food, itemTypeNames.SpellTome, itemTypeNames.Potion, itemTypeNames.CraftingComponent, itemTypeNames.Weapon]
  demoFoodTypes: IFood[] = foodTypes
  demoSpells: ISpell[] = spells
  demoPotions: IPotion[] = potions
  craftingComponents: {name: string, price: number}[] = [
    {name: "Bonemeal", price: 5},
    {name: "Dragon Guts", price: 100},
    {name: "Daffodil Petals", price: 2},
    {name: "Deer Antlers", price: 10},
    {name: "Rat Antlers", price: 5},
    {name: "Penguin Antlers", price: 30},
    {name: "Sulfur", price: 20}
  ];
  demoWeapons: IWeapon[] = weapons
  getRandomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export class inventorySlot{
  item: IItemType
  stackSize: number
}