import { fireEvent, render, screen } from "@testing-library/react";
import PhotoInfoGrid from "./photo-info-grid";

describe("PhotoInfoGrid", () => {
  describe("render component with props correctly", () => {
    const baseProps = {
      alt: "test",
      avg_color: "test",
      liked: true,
      photographer: "photographer test",
      photographer_url: "test",
      src: "/test-image.jpg",
    };

    render(<PhotoInfoGrid {...baseProps} />);

    it("render image props", () => {
      screen.debug();
      expect(screen.getByRole("img")).toHaveAttribute(
        "src",
        "/_next/image?url=%2Ftest-image.jpg&w=256&q=75"
      );
      expect(screen.getByRole("img")).toHaveAttribute("alt", "test");
    });

    it("render text props", () => {
      expect(screen.getByTestId("photographer")).toHaveTextContent(
        "photographer test"
      );
      expect(screen.getByTestId("alt")).toHaveTextContent(baseProps.alt);
      expect(screen.getByTestId("avg_color")).toHaveTextContent(
        baseProps.avg_color
      );
      expect(screen.getByRole("link")).toHaveAttribute(
        "href",
        baseProps.photographer_url
      );
    });
  });
});
