"use client";

import { useMemo } from "react";
import { PhotoInfoGrid } from "../photoInfoGrid/photo-info-grid";
import { usePhotos } from "@/context/PhotosContext";

export const PhotoList = () => {
  const { photos } = usePhotos();

  return useMemo(
    () => (
      <div>
        {photos.map((props) => (
          <div key={props.id}>
            <PhotoInfoGrid {...props} />
          </div>
        ))}
      </div>
    ),
    [photos]
  );
};
