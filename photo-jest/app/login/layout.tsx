"use client";

import Image from "next/image";

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-xs">
      <div className="flex flex-col items-center">
        <Image
          className="mb-[24px]"
          src="/images/logo.png"
          alt="logo"
          width={75}
          height={75}
        />
        <h2 className="text-color[#111827] font-bold text-[20px] mb-[40px]">
          Sign in to your account
        </h2>
      </div>
      {children}
    </div>
  );
}
