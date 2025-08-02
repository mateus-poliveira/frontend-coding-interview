import { render, screen } from "@testing-library/react";
import { PhotoList } from "./photo-list";
import { PHOTO_INFO_BASE_PROPS } from "../photoInfoGrid/photo-info-grid.test";
import { PhotosProvider, usePhotos } from "@/context/PhotosContext";

const PHOTO_LIST_BASE_PROPS = {
  list: [PHOTO_INFO_BASE_PROPS, PHOTO_INFO_BASE_PROPS],
};

describe("PhotoList", () => {
  describe("render component with props correctly", () => {
    it("render correct list length", () => {
      render(
        <PhotosProvider initialPhotos={PHOTO_LIST_BASE_PROPS.list}>
          <PhotoList />
        </PhotosProvider>
      );
      expect(screen.getAllByRole("img").length).toBe(4);
    });
  });
});
