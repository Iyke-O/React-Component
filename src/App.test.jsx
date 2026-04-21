import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the product card", () => {
  render(<App />);
  expect(screen.getByText(/wireless headphones/i)).toBeInTheDocument();
  expect(screen.getByText(/\$120/i)).toBeInTheDocument();
});
