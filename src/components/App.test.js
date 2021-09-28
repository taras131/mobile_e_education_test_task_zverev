import React from "react";
import {render, screen} from "@testing-library/react"
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
    it("renders App component", () => {
        render(<App/>)
        screen.debug()
        expect(screen.getByText(/Выполнить/i)).toBeInTheDocument()
    })
    it("button run click", () => {
        const {getByTestId} = render(<App/>)
        expect(getByTestId("pop-app-wrapper")).not.toHaveClass("popup_wrapper_active")
        userEvent.click(getByTestId("run-button"))
        expect(getByTestId("pop-app-wrapper")).toHaveClass("popup_wrapper_active")
    })
})
