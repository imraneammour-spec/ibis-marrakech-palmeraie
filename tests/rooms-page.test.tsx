import { render, screen } from "@testing-library/react";
import RoomsPage from "@/app/rooms/page";

describe("RoomsPage", () => {
  it("provides the shared booking form and room guidance without removed introductory notes", () => {
    render(<RoomsPage />);

    expect(screen.getByRole("heading", { name: /rest well/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/check-in/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /room essentials/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /need help choosing/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /comfort, simply considered/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/approved hotel photography slots are ready for future imagery/i)).not.toBeInTheDocument();
  });
});
