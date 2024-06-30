export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-muted/40 py-8 px-6">{children}</main>
    </div>
  );
}
