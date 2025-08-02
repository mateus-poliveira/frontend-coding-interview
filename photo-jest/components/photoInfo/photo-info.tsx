"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Photo } from "types/photos";

export const PhotoInfo = memo(
  ({ alt, avg_color, src, photographer, photographer_url }: Partial<Photo>) => {
    return (
      <div className="grid gap-[12px] grid-cols-[75px_auto_60px]">
        <Image
          src={src?.tiny || ""}
          alt={alt || ""}
          data-testid="image"
          width={75}
          height={75}
          role="img"
          className="w-[75px] h-[75px] object-cover rounded-[16px]"
        />
        <div role="contentinfo" className="grid">
          <h3
            className="text-sm font-bold weight-700"
            data-testid="photographer"
          >
            {photographer}
          </h3>
          <p
            className="text-sm font-regular weight-400 truncate text-overflow-ellipsis"
            data-testid="alt"
          >
            {alt}
          </p>
          <div className="flex gap-[12px] content-center align-center">
            <span
              className="text-sm font-regular weight-400 leading-[11px]"
              data-testid="avg_color"
            >
              {avg_color}
            </span>
            <span
              className="w-[12px] h-[12px] inline-block"
              style={{ backgroundColor: avg_color }}
            ></span>
          </div>
        </div>
        <Link
          className="text-[12px] font-regular weight-400"
          href={photographer_url || ""}
          role="link"
        >
          <span className="flex h-[12px] items-center pt-[10px]">
            <Image
              className="mr-[4px]"
              src="/images/link.png"
              alt="link"
              width={12}
              height={12}
            />
            <span className="text-blue-600">Portfolio</span>
          </span>
        </Link>
      </div>
    );
  }
);
