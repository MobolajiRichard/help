import "./globals.css";

export const metadata = {
  title: "Help",
  description: "Revolutionizing everyday's work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
