import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import{describe, expect, it} from "@jest/globals";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("renders the button with the correct label", () => {
    render(<Button label="Click me" onClick={() => {}} />);
   // expect(screen.getByText("Click me")).toBeInTheDocument(); el texto se encuentra en el documento es decir que se renderizo
   expect(screen.getByText("Click me")).toBeTruthy;
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
