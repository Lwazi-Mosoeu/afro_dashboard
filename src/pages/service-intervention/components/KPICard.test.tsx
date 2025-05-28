// KPICard.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KPICard } from "./Cards";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";

expect.extend(matchers);

describe("KPICard", () => {
  it("renders", () => {
    render(<KPICard value="42" description="Answers" />);
    expect(screen.getByText("42")).toBeInTheDocument();
  });
});
