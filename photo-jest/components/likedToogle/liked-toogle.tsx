"use client";

import { useMemo } from "react";
import type { Photo } from "types/photos";
import Image from "next/image";

type LikedToggleProps = {
  liked: Photo["liked"];
  onLike: () => void;
};

export const LikedToggle = ({ liked, onLike }: LikedToggleProps) => {
  return useMemo(
    () => (
      <div onClick={onLike}>
        {liked ? (
          <Image
            data-testid="star"
            src="/images/star.png"
            width={20}
            height={20}
            alt="start"
          />
        ) : (
          <Image
            data-testid="empty-star"
            src="/images/emptyStar.png"
            width={20}
            height={20}
            alt="start"
          />
        )}
      </div>
    ),
    [liked]
  );
};
