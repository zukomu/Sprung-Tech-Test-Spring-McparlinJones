import { spellSkillLevel } from "../enums/spellSkillLevel.enum"

export class Spell implements ISpell{
    constructor(spell: ISpell){
        this.name = spell.name
        this.effect = spell.effect
        this.skillLevel = spell.skillLevel
    }
    skillLevel: spellSkillLevel
    name: string
    effect: string
}
export interface ISpell{
    name: string
    effect: string
    skillLevel: spellSkillLevel
}