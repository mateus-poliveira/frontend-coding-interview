"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Photo } from "types/photos";

interface PhotoContextType {
  photos: Photo[];
  setPhotos: (photos: Photo[]) => void;
  toggleLiked: (index: number) => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export function PhotosProvider({
  children,
  initialPhotos,
}: {
  children: ReactNode;
  initialPhotos: Photo[];
}) {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);

  const toggleLiked = (index: number) => {
    const newPhotos = [...photos];
    newPhotos[index].liked = !newPhotos[index].liked;
    setPhotos(newPhotos);
  };

  return (
    <PhotoContext.Provider value={{ photos, setPhotos, toggleLiked }}>
      {children}
    </PhotoContext.Provider>
  );
}

export function usePhotos() {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error("usePhotos must be used within a PhotosProvider");
  }
  return context;
}
