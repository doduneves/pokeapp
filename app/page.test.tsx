/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("Home Page works correctly", () => {
    render(<Page />);
    expect(screen.getByRole("heading")).toHaveTextContent("Poke App");

    const button = screen.queryByText('Search')
    expect(button).toBeInTheDocument()
});
