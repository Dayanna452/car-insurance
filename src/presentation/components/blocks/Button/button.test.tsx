import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Button } from './index';

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies correct size, color, and variant", () => {
    render(<Button size="lg" color="dark" variant="text">Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);

    expect(buttonElement).toHaveAttribute("data-size", "lg");
    expect(buttonElement).toHaveAttribute("data-color", "dark");
    expect(buttonElement).toHaveAttribute("data-variant", "text");
  });

  it("renders start and end icons", () => {
    const startIcon = <span data-testid="start-icon">Start Icon</span>;
    const endIcon = <span data-testid="end-icon">End Icon</span>;

    render(
      <Button startIcon={startIcon} endIcon={endIcon}>
        Button with Icons
      </Button>
    );

    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("applies the fullWidth class when fullWidth prop is true", () => {
    render(<Button fullWidth>Full Width Button</Button>);
    const buttonElement = screen.getByText(/Full Width Button/i);
    expect(buttonElement).toHaveAttribute("data-full-width", "true");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const buttonElement = screen.getByText(/Clickable Button/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
