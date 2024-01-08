import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Footer } from "../footer";


test("Copyright message renders successfully", () => {
  render(<Footer />);

  const element = screen.getByText(/Copyright NOURISHED. 2024./i);

  expect(element).toBeInTheDocument();
});
