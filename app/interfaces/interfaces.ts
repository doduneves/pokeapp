export interface IAbilityInfo {
    ability: IAbility,
    is_hidden?: boolean,
    slot?: number,
}

export interface IAbility {
    name: string,
    url?: string,
}