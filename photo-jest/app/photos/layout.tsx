"use client";

//TODO: Add logo
export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>All Photos</h2>
      {children}
    </div>
  );
}
