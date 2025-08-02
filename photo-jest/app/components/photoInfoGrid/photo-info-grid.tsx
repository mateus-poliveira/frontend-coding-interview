"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EmptyStart from "./EmptyStar.svg";
import Start from "./Star.svg";

type PhotoInfoGridProps = {
  alt: string;
  avg_color: string;
  liked: boolean;
  photographer: string;
  src: string;
  photographer_url: string;
};

//TODO: Add favorite button
export const PhotoInfoGrid = memo(
  ({
    alt,
    avg_color,
    liked,
    src,
    photographer,
    photographer_url,
  }: PhotoInfoGridProps) => {
    const [photoLiked, setPhotoLiked] = useState(liked);
    return (
      <>
        <button onClick={() => setPhotoLiked(!photoLiked)}>
          {photoLiked ? <Start /> : <EmptyStart />}
        </button>
        <Image
          src={src}
          alt={alt}
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
        <Link href={photographer_url} role="link">
          Portfolio
        </Link>
      </>
    );
  }
);

// {
//       "id": 2325447,
//       "width": 5184,
//       "height": 3456,
//       "url": "https://www.pexels.com/photo/hot-air-balloon-2325447/",
//       "photographer": "Francesco Ungaro",
//       "photographer_url": "https://www.pexels.com/@francesco-ungaro",
//       "photographer_id": 21273,
//       "avg_color": "#85928B",
//       "src": {
//         "original": "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
//         "large2x": "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         "large": "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//         "medium": "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=350",
//         "small": "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=130",
//         "portrait": "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//         "landscape": "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//         "tiny": "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//       },
//       "liked": false,
//       "alt": "Hot air balloons float over the mesmerizing landscape of Cappadocia, Turkey at sunrise."
