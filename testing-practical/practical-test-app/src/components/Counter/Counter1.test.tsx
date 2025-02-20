import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter1";

describe("Counter Component", () => {
    it("should render the counter with initial value 0", () => {
        render(<Counter />);
        const counterValue = screen.getByTestId("counter-value");
        expect(counterValue).toHaveTextContent("0");
    });

    it("should increment the counter when button is clicked", () => {
        render(<Counter />);
        const button = screen.getByText("Increment");
        fireEvent.click(button);
        fireEvent.click(button);

        const counterValue = screen.getByTestId("counter-value");
        expect(counterValue).toHaveTextContent("2");
    });

    it("should call onIncrement callback when incremented", () => {
        const mockOnIncrement = jest.fn();  // 🔥 Mock de la función
        render(<Counter onIncrement={mockOnIncrement} />);

        const button = screen.getByText("Increment");
        fireEvent.click(button);
        fireEvent.click(button);

        expect(mockOnIncrement).toHaveBeenCalledTimes(2);
        expect(mockOnIncrement).toHaveBeenCalledWith(1); // Primera vez con 1
        expect(mockOnIncrement).toHaveBeenCalledWith(2); // Segunda vez con 2
    });
});
