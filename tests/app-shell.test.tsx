import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  DM_Sans: () => ({ variable: "font-sans" }),
  Playfair_Display: () => ({ variable: "font-serif" })
}));

import RootLayout from "@/app/layout";

describe("RootLayout", () => {
  it("provides a keyboard skip target without adding a second main landmark", () => {
    const documentTree = RootLayout({ children: <p>Hotel content</p> });
    const body = documentTree.props.children;

    render(<>{body.props.children}</>);

    expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute("href", "#main-content");
    expect(document.getElementById("main-content")).toHaveAttribute("tabindex", "-1");
    expect(screen.queryByRole("main")).not.toBeInTheDocument();
  });
});
