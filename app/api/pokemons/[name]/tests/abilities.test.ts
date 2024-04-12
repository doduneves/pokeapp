import { IAbilityInfo } from "@/app/interfaces/interfaces"
import { orderAbility } from "../abilities"

const abilities: IAbilityInfo[] = [
    {
        "ability": {
            "name": "b",
            "url": "c"
        },
        "is_hidden": true,
        "slot": 2
    },
    {
        "ability": {
            "name": "a",
            "url": "f"
        },
        "is_hidden": false,
        "slot": 1
    },
]

describe('/api/pokemons/name', () => {
    test('returns the abilities ordered', () => {
        const orderedAbility: IAbilityInfo[] = [
            {
                "ability": {
                    "name": "a",
                    "url": "f"
                },
                "is_hidden": false,
                "slot": 1
            },
            {
                "ability": {
                    "name": "b",
                    "url": "c"
                },
                "is_hidden": true,
                "slot": 2
            },
        ]
        expect(orderAbility(abilities)).toEqual(orderedAbility)
    })
})