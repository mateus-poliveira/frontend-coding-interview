"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import EmptyStart from "./EmptyStar.svg";
// import Start from "./Star.svg";
import type { Photo } from "types/photos";

//TODO: Add favorite button
//TODO: Add color square
export const PhotoInfoGrid = memo(
  ({
    alt,
    avg_color,
    liked,
    src,
    photographer,
    photographer_url,
  }: Partial<Photo>) => {
    const [photoLiked, setPhotoLiked] = useState(liked);
    return (
      <>
        {/* <button onClick={() => setPhotoLiked(!photoLiked)}>
          {photoLiked ? <Start /> : <EmptyStart />}
        </button> */}
        <Image
          src={src?.tiny || ""}
          alt={alt || ""}
          data-testid="image"
          width={75}
          height={75}
          role="img"
        />
        <div role="contentinfo">
          <p data-testid="photographer">{photographer}</p>
          <p data-testid="alt">{alt}</p>
          <p data-testid="avg_color">{avg_color}</p>
        </div>
        <Link href={photographer_url || ""} role="link">
          Portfolio
        </Link>
      </>
    );
  }
);
