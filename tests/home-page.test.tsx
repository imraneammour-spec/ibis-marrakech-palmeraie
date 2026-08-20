import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("attributes review data to Accor and retains the interactive hotel map", () => {
    render(<Home />);

    expect(document.body).not.toHaveTextContent("3.6/5");
    expect(screen.getByRole("link", { name: /read reviews on accor/i })).toHaveAttribute("href", "https://all.accor.com/hotel/6290/index.en.shtml");
    expect(screen.getByTitle(/map showing ibis marrakech palmeraie/i)).toBeInTheDocument();
  });
});
