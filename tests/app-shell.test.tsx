import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  DM_Sans: () => ({ variable: "font-sans" }),
  Playfair_Display: () => ({ variable: "font-serif" })
}));

import RootLayout from "@/app/layout";

describe("RootLayout", () => {
  it("provides a keyboard skip link to the main landmark", () => {
    const documentTree = RootLayout({ children: <p>Hotel content</p> });
    const body = documentTree.props.children;

    render(<>{body.props.children}</>);

    expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute("href", "#main-content");
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
  });
});
