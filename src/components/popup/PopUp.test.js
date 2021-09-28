import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PopUp from "./PopUp";
import userEvent from "@testing-library/user-event";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
describe("PopUp",()=>{
    it("renders component", () => {
        act(() => {
            render(<PopUp />, container);
        });
        expect(container.textContent).toBe("Результат: Хорошо, спасибо");
    });
    it("renders witch result", () => {
        act(()=>{
            render(<PopUp resultArrayList={"1,2,3,4"} />, container);
        })
        expect(container.textContent).toBe("Результат: 1,2,3,4Хорошо, спасибо");
    });
    it("changes value when clicked", () => {
        const setIsShowPopUp  = jest.fn();
        act(() => {
            render(<PopUp setIsShowPopUp = {setIsShowPopUp}/>, container);
        });
        const button = document.querySelector("[data-testid=ok]");
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(setIsShowPopUp).toHaveBeenCalledTimes(1);
    });
})
