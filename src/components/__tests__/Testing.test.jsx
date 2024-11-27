import { render, screen } from "@testing-library/react";
import Testing from "../Testing";
import "@testing-library/jest-dom";
test("Should Load Testing Component", () => {
  render(<Testing />);
  // assertion
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
