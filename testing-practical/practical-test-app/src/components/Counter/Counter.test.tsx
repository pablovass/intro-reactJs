import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments count when button is clicked", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: /count: 0/i });

    fireEvent.click(button);

    expect(button).toHaveTextContent("Count: 1");
});
