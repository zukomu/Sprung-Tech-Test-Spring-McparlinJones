import { Injectable } from '@angular/core';
import { IEffect } from 'src/app/model/classes/itemTypes/Potion';
import { Weapon } from 'src/app/model/classes/itemTypes/Weapon';
import { Spell } from 'src/app/model/classes/spell';

@Injectable({
  providedIn: 'root'
})
export class CharacterStatusService {

  constructor() { }
  spellsKnown: Spell[] = []
  health: number = 17
  maxHealth: number = 200
  equippedWeapon: Weapon | null = null
  activeEffects: IEffect[] = []

  restoreHealth(amount: number){
    this.health += amount;
    if (this.health > this.maxHealth){
      this.health = this.maxHealth;
    }
  }
  addSpell(spell: Spell): boolean{
    if (this.spellsKnown.find(a => a.name === spell.name) != null){
      return false;
    }
    else {
      this.spellsKnown.push(spell);
      return true;
    }
  }
  addActiveEffect(effect: IEffect): boolean{
    if (this.activeEffects.find(a => a.name === effect.name) != null){
      return false;
    }
    else {
      const index = this.activeEffects.length;
      this.activeEffects.push(effect);
      setTimeout(() => {
        this.activeEffects.splice(index, 1);
      }, effect.duration * 1000);
      return true;
    }
  }
  changeWeapon(weapon: Weapon){
    if (this.equippedWeapon && this.equippedWeapon?.id === weapon.id){
      this.equippedWeapon = null;
    }
    else {
      this.equippedWeapon = weapon;
    }
  }
}
