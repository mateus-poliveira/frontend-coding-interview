import "@/styles/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center content-center h-screen">
        <div className="px-[34px] py-[36px] max-w-xl content-center">
          {children}
        </div>
      </body>
    </html>
  );
}
