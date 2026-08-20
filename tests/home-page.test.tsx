import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("attributes review data to Accor without linking visitors away and directs guests to the dedicated Location page", () => {
    render(<Home />);

    expect(document.body).not.toHaveTextContent("3.6/5");
    expect(screen.queryByRole("link", { name: /read reviews on accor/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore the location/i })).toHaveAttribute("href", "/location");
    expect(screen.queryByTitle(/map showing ibis marrakech palmeraie/i)).not.toBeInTheDocument();
  });
});
