import "@testing-library/jest-dom";
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import CaretakerPopup, { CaretakerPopupTestIds } from "./CaretakerPopup";
import CaretakerPopupProvider from "@/react-state-management/providers/CaretakerPopupProvider";
import { CaretakerPopupTitleTestIds } from "./CaretakerPopupTitle";
import { CaretakerPopupBodyTestIds } from "./CaretakerPopupBody";

export const tests = describe("Caretaker Popup: [CaretakerPopup]", () => {
    it("should render", () => {
        jest.useFakeTimers();

        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );
    
        act(() => {
            jest.advanceTimersByTime(1500);
        });

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

    
    });

    it("should close <CaretakerPopup /> when the X button is clicked", () => {
        jest.useFakeTimers();

        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );
    
        act(() => {
            jest.advanceTimersByTime(1500);
        });

        act(() => {
            const closeCaretakerPopupBtn = screen.getByTestId(CaretakerPopupTitleTestIds.closePopupBtn);
            fireEvent.click(closeCaretakerPopupBtn);
        })

        const popup = screen.queryByTestId(CaretakerPopupTestIds.mainWindow);
        expect(popup).not.toBeInTheDocument();
    });
        
    
    it("should close <CaretakerPopup /> when the OK button is clicked", () => {
        jest.useFakeTimers();

        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );
    
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        
        const caretakerPopupContainer = screen.getByTestId(CaretakerPopupTestIds.mainWindow);
        expect(caretakerPopupContainer).toBeInTheDocument();

        const okCaretakerPopupBtn = screen.getByTestId(CaretakerPopupBodyTestIds.okPopupBtn);
        expect(okCaretakerPopupBtn).toBeInTheDocument();
        
        // popup will be closed
        act(() => {
            fireEvent.click(okCaretakerPopupBtn)
        });

        const popup = screen.queryByTestId(CaretakerPopupTestIds.mainWindow);
        expect(popup).not.toBeInTheDocument();
    });

    it("should disable popups when doNotShow button is clicked", () => {
        const spy = Storage.prototype.setItem = jest.fn();

        jest.useFakeTimers();

        render(
            <CaretakerPopupProvider>
                <CaretakerPopup />
            </CaretakerPopupProvider>
        );
    
        act(() => {
            jest.advanceTimersByTime(1500);
        });

        const doNotShowBtn = screen.getByTestId(CaretakerPopupBodyTestIds.doNotShowBtn);
        expect(doNotShowBtn).toBeInTheDocument();
        
        // popup will be closed
        act(() => {
            fireEvent.click(doNotShowBtn);
        });
        
        expect(spy).toBeCalled();
    });
});