export enum spellSkillLevel{
    Novice = 0,
    Apprentice = 1,
    Journeyman = 2,
    Expert = 3,
    Master = 4
}
export function getSpellSkillLevel(levelNumber: number): string{
    const levels = ["Novice", "Apprentice", "Journeyman", "Expert", "Master"]
    return levels[levelNumber]
}