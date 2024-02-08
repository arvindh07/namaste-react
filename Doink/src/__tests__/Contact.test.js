import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("test contact component", () => {
    it("should render contact component", () => {
        render(<Contact />)
    
        const heading = screen.getByRole("heading", { name: "Contact" });
        // assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("should have submit button in Contact component", () => {
        render(<Contact />)
    
        const submitBtn = screen.getByRole("button", { name: "Submit" });
        // assertion
        expect(submitBtn).toBeInTheDocument();
    })
    
    it("should have name input in Contact component", () => {
        render(<Contact />)
    
        const inputName = screen.getByPlaceholderText("enter your name");
        // assertion
        expect(inputName).toBeInTheDocument();
    })
    
    it("should have three input boxes in Contact component", () => {
        render(<Contact />)
    
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes[0]);
        // assertion
        expect(inputBoxes.length).toBe(3);
    })
})