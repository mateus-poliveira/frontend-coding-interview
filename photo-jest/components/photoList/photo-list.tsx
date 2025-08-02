"use client";

import type { Photo } from "types/photos";
import { PhotoInfoGrid } from "../photoInfoGrid/photo-info-grid";

type PhotoListProps = {
  list: Photo[];
};

export const PhotoList = ({ list }: PhotoListProps) => {
  return (
    <div>
      {list.map((props) => (
        <div key={props.id}>
          <PhotoInfoGrid {...props} />
        </div>
      ))}
    </div>
  );
};
