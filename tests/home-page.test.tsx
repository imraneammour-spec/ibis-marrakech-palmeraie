import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("does not show the removed guest experiences block and directs guests to the dedicated Location page", () => {
    render(<Home />);

    expect(document.body).not.toHaveTextContent("3.6/5");
    expect(screen.queryByRole("link", { name: /read reviews on accor/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/guest experiences/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /service stands out/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore the location/i })).toHaveAttribute("href", "/location");
    expect(screen.queryByTitle(/map showing ibis marrakech palmeraie/i)).not.toBeInTheDocument();
  });
});
