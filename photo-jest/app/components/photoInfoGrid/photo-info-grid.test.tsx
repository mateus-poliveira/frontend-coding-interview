import { render, screen } from "@testing-library/react";
import { PhotoInfoGrid } from "./photo-info-grid";

export const PHOTO_INFO_BASE_PROPS = {
  alt: "test",
  avg_color: "test",
  liked: true,
  photographer: "photographer test",
  photographer_url: "test",
  src: "/test-image.jpg",
};

describe("PhotoInfoGrid", () => {
  describe("render component with props correctly", () => {
    render(<PhotoInfoGrid {...PHOTO_INFO_BASE_PROPS} />);

    it("render image props", () => {
      expect(screen.getByRole("img")).toHaveAttribute(
        "src",
        "/_next/image?url=%2Ftest-image.jpg&w=256&q=75"
      );
      expect(screen.getByRole("img")).toHaveAttribute(
        "alt",
        PHOTO_INFO_BASE_PROPS.alt
      );
    });

    it("render text props", () => {
      expect(screen.getByTestId("photographer")).toHaveTextContent(
        PHOTO_INFO_BASE_PROPS.photographer
      );
      expect(screen.getByTestId("alt")).toHaveTextContent(
        PHOTO_INFO_BASE_PROPS.alt
      );
      expect(screen.getByTestId("avg_color")).toHaveTextContent(
        PHOTO_INFO_BASE_PROPS.avg_color
      );
      expect(screen.getByRole("link")).toHaveAttribute(
        "href",
        PHOTO_INFO_BASE_PROPS.photographer_url
      );
    });
  });
});
