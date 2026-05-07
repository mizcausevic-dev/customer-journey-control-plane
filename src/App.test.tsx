import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Customer Journey Control Plane", () => {
  it("renders the hero title", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /map lifecycle pressure, conversion gaps, and intervention timing in one operating surface/i
      })
    ).toBeInTheDocument();
  });

  it("renders segment and intervention content", () => {
    render(<App />);
    expect(screen.getByText(/segment view/i)).toBeInTheDocument();
    expect(screen.getByText(/activation recovery sprint/i)).toBeInTheDocument();
  });
});
