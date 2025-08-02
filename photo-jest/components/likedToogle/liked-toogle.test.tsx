import { render, screen } from "@testing-library/react";
import { PHOTO_INFO_BASE_PROPS } from "../photoInfoGrid/photo-info-grid.test";
import { LikedToggle } from "./liked-toogle";

describe("LikedToogle", () => {
  describe("render correct star based on props", () => {
    const onClickMock = jest.fn();

    it("render liked star", () => {
      render(<LikedToggle liked={true} onLike={onClickMock} />);
      expect(screen.getByTestId("star")).toBeInTheDocument();
    });

    it("render empty star", () => {
      render(<LikedToggle liked={false} onLike={onClickMock} />);
      expect(screen.getByTestId("empty-star")).toBeInTheDocument();
    });
  });
});
