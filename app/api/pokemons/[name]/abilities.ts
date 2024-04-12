import { IAbilityInfo } from "@/app/interfaces/interfaces";

export const orderAbility = (abilities: IAbilityInfo[]): IAbilityInfo[] => {
    return abilities
        .sort((a: IAbilityInfo, b: IAbilityInfo) => {
            return a.ability.name.toLowerCase() < b.ability.name.toLowerCase() ? -1 : 1
        })
}