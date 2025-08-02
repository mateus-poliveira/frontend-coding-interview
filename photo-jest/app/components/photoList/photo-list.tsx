"use client";

import {
  PhotoInfoGrid,
  PhotoInfoGridProps,
} from "../photoInfoGrid/photo-info-grid";

type PhotoListProps = {
  list: PhotoInfoGridProps[];
};

export const PhotoList = ({ list }: PhotoListProps) => {
  return (
    <div>
      {list.map((props) => (
        <div key={props.photographer_url}>
          <PhotoInfoGrid {...props} />
        </div>
      ))}
    </div>
  );
};
