"use client";

import { useMemo } from "react";
import { PhotoInfo } from "../photoInfoGrid/photo-info";
import { usePhotos } from "@/context/PhotosContext";
import { LikedToggle } from "../likedToogle/liked-toogle";

export const PhotoList = () => {
  const { photos, toggleLiked } = usePhotos();

  return useMemo(
    () => (
      <div className="grid gap-[12px]">
        {photos.map((props, index) => {
          const { liked, ...restWithoutLiked } = props;
          return (
            <div
              className="grid gap-[12px] grid-cols-[20px_auto]"
              key={props.id}
            >
              <LikedToggle
                liked={props.liked}
                onLike={() => toggleLiked(index)}
              />
              <PhotoInfo {...restWithoutLiked} />
            </div>
          );
        })}
      </div>
    ),
    [photos]
  );
};
