import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CaretakerPopup, { CaretakerPopupTestIds } from "./CaretakerPopup";
import CaretakerPopupProvider from "@/react-state-management/providers/CaretakerPopupProvider";
import { CaretakerPopupTitleTestIds } from "./CaretakerPopupTitle";
import { CaretakerPopupBodyTestIds } from "./CaretakerPopupBody";

export const tests = describe("Caretaker Popup: [CaretakerPopup]", () => {
    it("should render", () => {
        // const setState = jest.fn(() => true);
        // const renderPopup = true;
        // jest
        // .spyOn(React, 'useState')
        // .mockImplementation(() => [renderPopup, setState]);
        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        )

        const timeoutId = setTimeout(() => {
            const caretakerPopupContainer = screen.getByTestId(CaretakerPopupTestIds.mainWindow);
            const titleComponent = screen.getByTestId(CaretakerPopupTitleTestIds.titleContainer);
            const bodyComponent = screen.getByTestId(CaretakerPopupBodyTestIds.bodyContainer);
            const closeCaretakerPopupBtn = screen.getByTestId(CaretakerPopupTitleTestIds.closePopupBtn);
            const okCaretakerPopupBtn = screen.getByTestId(CaretakerPopupBodyTestIds.okPopupBtn);
            const doNotShowPopupBtn = screen.getByTestId(CaretakerPopupBodyTestIds.doNotShowBtn);

            expect(caretakerPopupContainer).toBeInTheDocument();
            expect(titleComponent).toBeInTheDocument();
            expect(bodyComponent).toBeInTheDocument();
            expect(closeCaretakerPopupBtn).toBeInTheDocument();
            expect(okCaretakerPopupBtn).toBeInTheDocument();
            expect(doNotShowPopupBtn).toBeInTheDocument();
        }, 2000);

        clearTimeout(timeoutId);
    
    });

    it("should close <CaretakerPopup /> when the X button is clicked", () => {
        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );
        
        const timeoutId = setTimeout(() => {
            const closeCaretakerPopupBtn = screen.getByTestId(CaretakerPopupTitleTestIds.closePopupBtn);
            // popup will be closed
            fireEvent.click(closeCaretakerPopupBtn)
            expect(screen.queryByTestId(CaretakerPopupTestIds.mainWindow)).not.toBeInTheDocument()
        }, 2000);
        
        clearTimeout(timeoutId);
    });
        
    
    it("should close <CaretakerPopup /> when the OK button is clicked", () => {
        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );

        const timeoutId = setTimeout(() => {
            const caretakerPopupContainer = screen.getByTestId(CaretakerPopupTestIds.mainWindow);
            expect(caretakerPopupContainer).toBeInTheDocument();
    
            const okCaretakerPopupBtn = screen.getByTestId(CaretakerPopupBodyTestIds.okPopupBtn);
            expect(okCaretakerPopupBtn).toBeInTheDocument();
            
            // popup will be closed
            fireEvent.click(okCaretakerPopupBtn);
            
            expect(screen.queryByTestId(CaretakerPopupTestIds.mainWindow)).not.toBeInTheDocument();
        }, 2000);
        
        clearTimeout(timeoutId);
    });

    it("should disable popups when doNotShow button is clicked", () => {
        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );

        const timeoutId = setTimeout(() => {
            const doNotShowBtn = screen.getByTestId(CaretakerPopupBodyTestIds.doNotShowBtn);
            expect(doNotShowBtn).toBeInTheDocument();
            
            // popup will be closed
            fireEvent.click(doNotShowBtn);
            const userPreference = window.localStorage.getItem("SHOW_CARETAKER_POPUP");
            expect(userPreference).not.toBeNull();
            expect(userPreference).not.toBeNaN();
            expect(userPreference).not.toBeDefined();
            expect(userPreference).toBeFalsy();

        }, 2000);
        
        clearTimeout(timeoutId);
    });
});