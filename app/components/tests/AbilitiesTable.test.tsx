/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AbilitiesTable from "../AbilitiesTable";
import { IAbilityInfo } from "../../interfaces/interfaces";


const abilities: IAbilityInfo[] = [
    {
        ability: {
            name: 'ability 1',
            url: ''
        },
    }, {
        ability: {
            name: 'ability 2',
            url: ''
        },
    }, {
        ability: {
            name: 'ability 3',
            url: ''
        },
    },
]


describe("AbilitiesTable", () => {
    beforeEach(() => {
        render(<AbilitiesTable abilities={abilities} />);
    });

    it("shows table headers correctly", () => {
        const nameHeader = screen.queryByText('Ability Name')
        expect(nameHeader).toBeInTheDocument()
    });

    it("shows all abilities on table", () => {
        const ability1Name = screen.queryByText('ability 1')
        const ability2Name = screen.queryByText('ability 2')
        const ability3Name = screen.queryByText('ability 3')
        expect(ability1Name).toBeInTheDocument()
        expect(ability2Name).toBeInTheDocument()
        expect(ability3Name).toBeInTheDocument()

    });
});
