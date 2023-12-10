import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar, { NavbarTestIds } from "./Navbar";
import { useSession } from "next-auth/react";

jest.mock("next-auth/react");
/**
 * @testDescription
 * Test for MiniTile
 * This test renders a Custom-tiles-Navbar checks if all the required information was rendered.
 *
 *
 * Test Count: 2
 * - `<Navbar/>` : Correctly renders Navbar component when user is signed in
 * - `<Navbar/>` : Correctly renders Navbar component when user is NOT signed in
 */
export const tests = describe("Navbar", () => {
    it("Correctly renders Navbar component when user is signed in", () => {
        (useSession as jest.Mock).mockReturnValueOnce({
            status: "authenticated",
        });

        render(<Navbar />);

        expect(screen.getByTestId(NavbarTestIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(NavbarTestIds.linkToHome)).toBeInTheDocument();
        expect(screen.getByTestId(NavbarTestIds.linkbarContainer)).toBeInTheDocument();
        expect(screen.getByTestId(NavbarTestIds.signOutBtn)).toBeInTheDocument();
    });

    it("Correctly renders Navbar component when user is NOT signed in", () => {
        (useSession as jest.Mock).mockReturnValueOnce({
            status: "unauthenticated",
        });

        render(<Navbar />);

        expect(screen.getByTestId(NavbarTestIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(NavbarTestIds.linkToHome)).toBeInTheDocument();
        expect(screen.getByTestId(NavbarTestIds.linkbarContainer)).toBeInTheDocument();
        expect(screen.queryByTestId(NavbarTestIds.signOutBtn)).not.toBeInTheDocument();
    });
});
