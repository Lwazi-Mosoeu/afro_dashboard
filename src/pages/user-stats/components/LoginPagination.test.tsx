import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import LoginPagination from "./LoginPagination";

describe("LoginPagination", () => {
  it("renders pagination controls", () => {
    render(<LoginPagination />);

    // Test Previous button (renders as <button>)
    expect(
      screen.getByRole("button", { name: /previous/i })
    ).toBeInTheDocument();

    // Test page number (rendered inside a button via PaginationLink)
    expect(screen.getByRole("button", { name: /1/i })).toBeInTheDocument();

    // Test Ellipsis (may need test ID)
    expect(screen.getByText("…")).toBeInTheDocument(); // or getByTestId

    // Test Next button
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();

    render(<LoginPagination />);
    screen.debug();
  });
});
