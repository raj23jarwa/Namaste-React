import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("contactUs page test cases", () => {
  test("should load our contactUs Page", () => {
    render(<ContactUs />);

    // Quering
    const headings = screen.getAllByRole("heading");

    // Assertion
    expect(headings.length).toBeGreaterThan(0); // Check if at least one heading exists
  });

  //   we can use it instead of test both works same
  it("should load button in my Contact component", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load input name iside the contact component", () => {
    render(<ContactUs />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  //  instead of input we will write textbox
  test("should load two input", () => {
    render(<ContactUs />);
    const inputs = screen.getAllByRole("textbox");
    // expect(inputs.length).toBeGreaterThan(0)
    expect(inputs.length).toBe(2);
  });
});
