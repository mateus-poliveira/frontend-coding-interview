import { render, screen } from "@testing-library/react";
import { PhotoList } from "./photo-list";
import { PHOTO_INFO_BASE_PROPS } from "../photoInfoGrid/photo-info-grid.test";

const PHOTO_LIST_BASE_PROPS = {
  list: [PHOTO_INFO_BASE_PROPS, PHOTO_INFO_BASE_PROPS],
};

describe("PhotoList", () => {
  describe("render component with props correctly", () => {
    render(<PhotoList {...PHOTO_LIST_BASE_PROPS} />);
    it("render correct list length", () => {
      expect(screen.getAllByRole("img").length).toBe(2);
    });
  });
});
