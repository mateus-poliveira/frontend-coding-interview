"use client";
import Image from "next/image";

//TODO: Add logo
export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Image
        className="mb-[24px]"
        src="/images/logo.png"
        alt="logo"
        width={75}
        height={75}
      />
      <h2 className="text-color[#111827] font-bold text-[20px] mb-[40px]">
        All Photos
      </h2>
      {children}
    </div>
  );
}
