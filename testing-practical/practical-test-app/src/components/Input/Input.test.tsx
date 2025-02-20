import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./Input";
// Table-Driven Testing
describe("Input Component", () => {
    const testCases = [
        { placeholder: "Enter your name", inputValue: "John" },
        { placeholder: "Enter your email", inputValue: "john@example.com" },
        { placeholder: "Search...", inputValue: "React Testing" },
    ];

    testCases.forEach(({ placeholder, inputValue }) => {
        it(`renders correctly with placeholder "${placeholder}" and updates value to "${inputValue}"`, () => {
            const handleChange = jest.fn();

            render(<Input placeholder={placeholder} onChange={handleChange} />);

            const inputElement = screen.getByPlaceholderText(placeholder);
            expect(inputElement).toBeInTheDocument();

            fireEvent.change(inputElement, { target: { value: inputValue } });
            expect(handleChange).toHaveBeenCalledWith(inputValue);
        });
    });
});
//https://platzi.com/home/clases/11224-react-testing-library/72384-desarrollo-guiado-por-pruebas-tdd-en-react/