'use client';

import { IAbilityInfo } from "../interfaces/interfaces";

type AbilitiesProps = {
    abilities: IAbilityInfo[]
}

export default function AbilitiesTable({ abilities }: AbilitiesProps) {
    return (
        <table className='table table-sm table-zebra'>
            <thead>
                <tr>
                    <th>Ability Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    abilities.map((a: IAbilityInfo, index: number) => (
                        <tr key={index}>
                            <td>{a.ability?.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}