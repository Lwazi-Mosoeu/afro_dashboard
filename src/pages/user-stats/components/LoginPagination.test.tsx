// LoginPagination.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoginPagination from "./LoginPagination";
import "@testing-library/jest-dom";

describe("LoginPagination", () => {
  it("renders pagination links", () => {
    render(<LoginPagination />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /next/i })).toBeInTheDocument();
    expect(screen.getByText("…")).toBeInTheDocument();
  });
});
