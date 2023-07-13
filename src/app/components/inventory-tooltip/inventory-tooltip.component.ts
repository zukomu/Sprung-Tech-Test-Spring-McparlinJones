import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CraftingComponent } from 'src/app/model/classes/itemTypes/CraftingComponent';
import { Food } from 'src/app/model/classes/itemTypes/Food';
import { Potion } from 'src/app/model/classes/itemTypes/Potion';
import { SpellTome } from 'src/app/model/classes/itemTypes/SpellTome';
import { Weapon } from 'src/app/model/classes/itemTypes/Weapon';
import { itemTypeNames } from 'src/app/model/enums/itemTypeNames.enum';
import { getSpellSkillLevel } from 'src/app/model/enums/spellSkillLevel.enum';
import { IItemType } from 'src/app/model/interfaces/IItemType';
import { CharacterStatusService } from 'src/app/services/character-status/character-status.service';
import { MousePositionService } from 'src/app/services/mouse-position/mouse-position.service';

@Component({
  selector: 'app-inventory-tooltip',
  templateUrl: './inventory-tooltip.component.html',
  styleUrls: ['./inventory-tooltip.component.scss']
})
export class InventoryTooltipComponent implements OnInit {

  constructor(private mousePositionService: MousePositionService, private characterService: CharacterStatusService) { }

  @Input() item: IItemType
  itemTypeNames: typeof itemTypeNames = itemTypeNames
  ngOnInit(): void {
    this.updateDetails();
  }
  updateDetails(){
    switch(this.item.itemType){
  // the below switch is a bit of a bodge. It makes sure that the compiler knows that the item is the proper type,
  // otherwise, it would complain that IItemType lacks some of the attributes we're calling (such as healthRestored on Food)
      case itemTypeNames.Food:
        this.food = this.item as Food;
        break;
      case itemTypeNames.SpellTome:
        this.spellTome = this.item as SpellTome;
        this.spellKnown = this.characterService.spellsKnown.findIndex(a => a.name === this.spellTome.name) == -1 ? 
          `${getSpellSkillLevel(this.spellTome.spell.skillLevel)} Level Spell` : "Spell Already Known";
        break;
      case itemTypeNames.Potion:
        this.potion = this.item as Potion;
        this.potionEffect = this.characterService.activeEffects.findIndex(a => a.description === this.potion.effect.description) == -1 ?
          this.potion.effect.description : "You are already under the influence of this effect from another source";
        break;
      case itemTypeNames.CraftingComponent:
        this.craftingComponent = this.item as CraftingComponent;
        break;
      case itemTypeNames.Weapon:
        this.weapon = this.item as Weapon;
        this.weaponDetails = `${this.weapon.ranged ? "Ranged":"Melee"}, DPS: ${this.weapon.dps},
          ${this.characterService.equippedWeapon && this.characterService.equippedWeapon.id === this.weapon.id ? "Equipped" : "Unequipped"}`;
          break;
    }
  }
  food: Food
  spellTome: SpellTome
  spellKnown: string
  potion: Potion
  potionEffect: string
  craftingComponent: CraftingComponent
  weapon: Weapon
  weaponDetails: string


  get left(): string{
    return (this.mousePositionService.mousePosition.x + 10) + "px"
  }
  get top(): string{
    return (this.mousePositionService.mousePosition.y + 10) + "px"
  }
}
