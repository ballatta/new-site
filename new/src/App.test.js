import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Brendan's name", () => {
  render(<App />);
  const linkElement = screen.getByText(/Brendan Allatta/);
  expect(linkElement).toBeInTheDocument();
});
