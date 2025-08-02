import type { Photo } from "types/photos";
import { PhotoList } from "@/components/photoList/photo-list";
import { getPhotos } from "@/lib/api/getPhotos";
import { PhotosProvider } from "@/context/PhotosContext";

export default async function AllPhotosPage() {
  const photos: { photos: Photo[] } = await getPhotos();

  return (
    <PhotosProvider initialPhotos={photos.photos}>
      <PhotoList />;
    </PhotosProvider>
  );
}
