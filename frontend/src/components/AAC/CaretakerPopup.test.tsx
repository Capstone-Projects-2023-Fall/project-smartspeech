import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CaretakerPopup, { CaretakerPopupTestIds } from "./CaretakerPopup";
import CaretakerPopupProvider from "@/react-state-management/providers/CaretakerPopupProvider";
import { CaretakerPopupTitleTestIds } from "./CaretakerPopupTitle";
import { CaretakerPopupBodyTestIds } from "./CaretakerPopupBody";

export const tests = describe("Caretaker Popup: [CaretakerPopup]", () => {
    it("should render", () => {
        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        )
    });

    it("should close <CaretakerPopup /> when the X button is clicked", () => {
        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );

        const caretakerPopupContainer = screen.getByTestId(CaretakerPopupTestIds.mainWindow);
        expect(caretakerPopupContainer).toBeInTheDocument();

        const closeCaretakerPopupBtn = screen.getByTestId(CaretakerPopupTitleTestIds.closePopupBtn);
        expect(closeCaretakerPopupBtn).toBeInTheDocument();
        
        // popup will be closed
        fireEvent.click(closeCaretakerPopupBtn);
        
        expect(screen.queryByTestId(CaretakerPopupTestIds.mainWindow)).not.toBeInTheDocument();
    });
    
    it("should close <CaretakerPopup /> when the OK button is clicked", () => {
        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );

        const caretakerPopupContainer = screen.getByTestId(CaretakerPopupTestIds.mainWindow);
        expect(caretakerPopupContainer).toBeInTheDocument();

        const okCaretakerPopupBtn = screen.getByTestId(CaretakerPopupBodyTestIds.okPopupBtn);
        expect(okCaretakerPopupBtn).toBeInTheDocument();
        
        // popup will be closed
        fireEvent.click(okCaretakerPopupBtn);
        
        expect(screen.queryByTestId(CaretakerPopupTestIds.mainWindow)).not.toBeInTheDocument();
    });
});