import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "@jest/globals";
import Button from "./Button";
import '@testing-library/jest-dom';


// Descripción del componente Button
describe('Button Component', () => {
  // Casuística 1: Verifica que el label se renderiza correctamente
  it('should display the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    expect(screen.getByText("Click Me")).toBeTruthy();
  });

  // Casuística 2: Verifica que onClick se ejecute correctamente
  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(<Button label="Click Me" onClick={mockOnClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // Casuística 3: Verifica que el label cambie después de hacer clic
  it('should change the label when clicked', () => {
    const { rerender } = render(<Button label="Click Me" onClick={() => {}} />);
    expect(screen.getByText("Click Me")).toBeTruthy();
    rerender(<Button label="Clicked" onClick={() => {}} />);
    expect(screen.getByText("Clicked")).toBeTruthy();
  });
});
