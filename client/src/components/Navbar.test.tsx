import { render as r, screen } from "@testing-library/react";
import Navbar from "./Navbar.tsx";

test("renders learn react link", () => {
  const render = () => {
    return r(<Navbar />);
  };
  render();
  const supportEarthquakeText = screen.getByText("Support Earthquake Victims");
  expect(supportEarthquakeText).toBeInTheDocument();
});
