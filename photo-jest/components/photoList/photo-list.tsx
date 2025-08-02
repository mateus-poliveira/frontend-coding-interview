"use client";

import { useMemo } from "react";
import { PhotoInfoGrid } from "../photoInfoGrid/photo-info-grid";
import { usePhotos } from "@/context/PhotosContext";
import { LikedToggle } from "../likedToogle/liked-toogle";

export const PhotoList = () => {
  const { photos, toggleLiked } = usePhotos();

  return useMemo(
    () => (
      <div>
        {photos.map((props, index) => {
          const { liked, ...restWithoutLiked } = props;
          return (
            <div key={props.id}>
              <LikedToggle
                liked={props.liked}
                onLike={() => toggleLiked(index)}
              />
              <PhotoInfoGrid {...restWithoutLiked} />
            </div>
          );
        })}
      </div>
    ),
    [photos]
  );
};
