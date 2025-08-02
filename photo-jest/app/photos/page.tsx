import { PhotoList } from "@/components/photoList/photo-list";
import { getPhotos } from "@/lib/api/getPhotos";
import type { Photo } from "types/photos";

export default async function AllPhotosPage() {
  const photos: { photos: Photo[] } = await getPhotos();
  return (
    <div>
      <h2>All Photos</h2>
      <PhotoList list={photos.photos} />
    </div>
  );
}
