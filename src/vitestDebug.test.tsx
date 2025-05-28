// vitestDebug.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import LoginPagination from "./pages/user-stats/components/LoginPagination";

describe("Debug output", () => {
  it("prints DOM", () => {
    render(<LoginPagination />);
    screen.debug();
  });
});
